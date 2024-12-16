/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRef, useState } from 'react';
import {
  RdsCheckbox,
  RdsCheckboxGroupWrapper,
  RdsFileInput,
  RdsInputDate,
  RdsInputNumber,
  RdsInputText,
  RdsInputTextArea,
  RdsRadioButton,
  RdsRadioButtonGroup,
  RdsRequiredIndicator,
  RdsSearchInput,
  RdsSwitch,
} from 'rte-design-system-react';

export const Forms = () => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const refSearch = useRef<HTMLInputElement>(null);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '10rem 1fr' }}>
      <span>RdsCheckbox</span>
      <RdsCheckbox label="checkbox" />
      <span>RdsCheckboxGroup</span>
      <RdsCheckboxGroupWrapper
        checkedValues={checkList}
        name="group"
        onChange={(value: string, status?: boolean) => {
          setCheckList((prev) => {
            if (status) {
              return [...prev, value];
            }
            return prev.filter((item) => item !== value);
          });
        }}
      >
        <RdsCheckbox key="check1" label="checkbox" value="checkbox" checkboxControl />
        <RdsCheckbox key="check2" label="checkbox2" value="checkbox2" />
        <RdsCheckbox key="check3" label="checkbox3" value="checkbox3" />
      </RdsCheckboxGroupWrapper>
      <span>RdsFileInput</span>
      <RdsFileInput
        label="file"
        acceptedFileTypes={['.ts', '.pdf']}
        onChange={(file, error) => {
          console.log('change', file);
          console.log('error', error);
        }}
        secondLabel="Upload"
      />
      <span>RdsInputDate</span>
      <div>
        <button className="rds- focus:rds-block" onClick={() => refSearch.current?.focus()}>
          skip
        </button>
        <RdsInputDate label="Date" />
      </div>
      <span>RdsInputNumber</span>
      <RdsInputNumber label="Number" name="number" />
      <span>RdsInputText</span>
      <RdsInputText value="text" />
      <span>RdsInputTextArea</span>
      <RdsInputTextArea label="textArea" value="value" />
      <span>RdsRadioButton</span>
      <RdsRadioButton label="radio" value="checkRadio" />
      <span>RdsRadioButtonGroup</span>
      <RdsRadioButtonGroup label="radioGroup" name="radioGroup">
        <RdsRadioButton label="radio1" value="checkRadio1" />
        <RdsRadioButton label="radio2" value="checkRadio2" />
      </RdsRadioButtonGroup>
      <span>RdsRequiredIndicator</span>
      <RdsRequiredIndicator />
      <span ref={refSearch} id="search">
        RdsSearchInput
      </span>
      <RdsSearchInput onSearch={(input) => console.log('input', input)} />
      <span ref={refSearch} id="search">
        RdsSwitch
      </span>
      <RdsSwitch name="name" value="Switch" onChange={(b) => console.log('switch Value :', b)} />
    </div>
  );
};

export default Forms;
