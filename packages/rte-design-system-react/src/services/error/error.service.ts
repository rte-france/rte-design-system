/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export class ErrorService {
  errors: string[] = [];
  registerError = (error: string) => this.errors.push(error);
  getFirstError = () => this.errors[0];
  getAllErrors = () => this.errors;
}

const mainErrorService = new ErrorService();

export default mainErrorService;
