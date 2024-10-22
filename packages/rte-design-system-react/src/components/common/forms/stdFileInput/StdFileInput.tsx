/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { getFileError } from '@/shared/utils/fileUtils';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { ChangeEventHandler, DragEvent, useEffect, useRef, useState } from 'react';
import StdIcon from '../../base/stdIcon/StdIcon';
import StdTextTooltip from '../../layout/stdTextTooltip/StdTextTooltip';
import StdRequiredIndicator from '../stdRequiredIndicator/StdRequiredIndicator';
import { fileInputClassBuilder } from './fileInputClassBuilder';
import StdFileStatus, { FileInputStatus } from './stdFileStatus/StdFileStatus';

export type FileInputErrorType = 'sizeError' | 'typeError';

export type FileInputSize = 'small' | 'medium';

export interface StdFileInputProps {
  label: string;
  secondLabel: string;
  acceptedFileTypes: string[];
  onChange: (file?: File, error?: FileInputErrorType) => void | Promise<void>;
  size?: FileInputSize;
  maxSizeFile?: number; // bytes
  informationText?: string;
  fileTypeLabel?: string;
  file?: File;
  fileStatus?: FileInputStatus;
  uploadProgress?: number;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  id?: string;
}

const StdFileInput = ({
  label,
  informationText,
  size = 'medium',
  secondLabel,
  maxSizeFile,
  acceptedFileTypes,
  onChange,
  fileTypeLabel,
  file,
  fileStatus,
  uploadProgress,
  helperText,
  error = false,
  required = false,
  disabled = false,
  id: propsId,
}: StdFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useStdId('file-input', propsId);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const { containerClasses, inputWrapperClasses, helperTextClasses } = fileInputClassBuilder(
    size,
    disabled,
    error,
    dragActive,
  );

  useEffect(() => {
    if (!file && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [file]);

  const handleFileChange = (newFile: File) => {
    const errorFile = getFileError(newFile, acceptedFileTypes, maxSizeFile);
    if (errorFile) {
      return void onChange(undefined, errorFile);
    }
    void onChange(newFile);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (!disabled && e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = e.dataTransfer.files;
      handleFileChange(files[0]);
    }
  };

  const handleDragActive = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDeleteFile = () => {
    void onChange(undefined);
  };

  return (
    <div className={containerClasses} id={id}>
      <div className="flex items-center gap-1 px-0.5 py-0.25 text-overnote font-light text-gray-700">
        <label className="line-clamp-1 text-left" htmlFor="test">
          {label}
          {required && <StdRequiredIndicator />}
        </label>
        {informationText && (
          <StdTextTooltip text={informationText} offset={10} placement="top">
            <StdIcon name={StdIconId.Info} width={10} height={10} color="gray-700" />
          </StdTextTooltip>
        )}
      </div>
      <label htmlFor="drop-area" className="h-2/3">
        <div
          tabIndex={0}
          className={inputWrapperClasses}
          onDragEnter={handleDragActive}
          onDragOver={handleDragActive}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
        >
          <StdIcon name={StdIconId.Upload} width={24} height={24} color="gray-700" />
          <span className="line-clamp-1 text-heading-xs text-gray-900">{fileTypeLabel}</span>
          <span className="line-clamp-1 text-caption text-gray-700">{secondLabel}</span>
        </div>
        <input
          ref={inputRef}
          id="drop-area"
          type="file"
          onChange={handleChange}
          disabled={disabled}
          accept={acceptedFileTypes.join(',')}
          className="hidden"
        />
      </label>
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
      {file && fileStatus && (
        <div className="mt-1">
          <StdFileStatus
            id={`${id}-file-status`}
            fileName={file.name}
            status={fileStatus}
            progress={uploadProgress}
            onDelete={handleDeleteFile}
          />
        </div>
      )}
    </div>
  );
};

export default StdFileInput;
