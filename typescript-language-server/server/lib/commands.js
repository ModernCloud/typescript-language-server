"use strict";
/*
 * Copyright (C) 2018 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
var Commands;
(function (Commands) {
    Commands.APPLY_WORKSPACE_EDIT = "_typescript.applyWorkspaceEdit";
    Commands.APPLY_CODE_ACTION = "_typescript.applyCodeAction";
    Commands.APPLY_REFACTORING = "_typescript.applyRefactoring";
    Commands.ORGANIZE_IMPORTS = '_typescript.organizeImports';
    Commands.APPLY_RENAME_FILE = '_typescript.applyRenameFile';
    /** Commands below should be implemented by the client */
    Commands.APPLY_COMPLETION_CODE_ACTION = "_typescript.applyCompletionCodeAction";
    Commands.SELECT_REFACTORING = '_typescript.selectRefactoring';
})(Commands = exports.Commands || (exports.Commands = {}));
//# sourceMappingURL=commands.js.map