/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ChangeEventHandler, DragEvent, useEffect, useRef, useState } from 'react';
import { FileInputStatus, RdsFileStatus } from './rdsFileStatus/RdsFileStatus.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { fileInputClassBuilder } from './fileInputClassBuilder.ts';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';
import { RdsTextTooltip } from '@/components/layout/index.ts';
import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { FileInputErrorType, FileInputSize, getFileError } from './fileUtils.ts';

export interface RdsFileInputProps {
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

export const RdsFileInput = ({
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
}: RdsFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useRdsId('file-input', propsId);
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

    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (!disabled && e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = e.dataTransfer.files;
      handleFileChange(files[0]!);
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
      <div className="rds-flex rds-items-center rds-gap-1 rds-px-0.5 rds-py-0.25 rds-text-overnote rds-font-light rds-text-gray-700">
        <label className="rds-line-clamp-1 rds-text-left">
          {label}
          {required && <RdsRequiredIndicator />}
        </label>
        {informationText && (
          <RdsTextTooltip text={informationText} offset={10} placement="top">
            <RdsIcon name={RdsIconId.Info} width={10} height={10} color="gray-700" />
          </RdsTextTooltip>
        )}
      </div>
      <label htmlFor="drop-area" className="rds-h-2/3">
        <div
          tabIndex={0}
          className={inputWrapperClasses}
          onDragEnter={handleDragActive}
          onDragOver={handleDragActive}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
        >
          <RdsIcon name={RdsIconId.Upload} width={24} height={24} color="gray-700" />
          <span className="rds-line-clamp-1 rds-text-heading-xs rds-text-gray-900">{fileTypeLabel}</span>
          <span className="rds-line-clamp-1 rds-text-caption rds-text-gray-700">{secondLabel}</span>
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
        <div className="rds-mt-1">
          <RdsFileStatus
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
