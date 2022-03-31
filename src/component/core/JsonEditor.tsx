import * as React from 'react';
const xx = require('@wibetter/json-schema-editor/dist/index.umd')


// jsonEdit.JSONSchemaEditor

const jsonSchema = { "name": "mudy", "age": 12 }

const JsonEditor: React.FC = () => {
    return (
        // <div>
        //     jsonView
        // </div>
        <div className="json-action-container">
            <div className="json-schema-box">
                <JSONSchemaEditor
                    data={jsonSchema}
                    onChange={(newJsonSchema: any) => {
                        console.log('jsonSchemaChange', JSON.stringify(newJsonSchema));
                        //   this.setState({
                        //     jsonSchema: newJsonSchema,
                        //   });
                    }}
                />
            </div>
        </div>

    );

}

export default JsonEditor

// [{
// 	"resource": "/d:/doc/mycode/react/tsapp/src/component/core/JsonEditor.tsx",
// 	"owner": "typescript",
// 	"code": "7016",
// 	"severity": 8,
// 	"message": "Could not find a declaration file for module '@wibetter/json-schema-editor/dist/index.umd'. 'D:/doc/mycode/react/tsapp/node_modules/@wibetter/json-schema-editor/dist/index.umd.js' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/wibetter__json-schema-editor` if it exists or add a new declaration (.d.ts) file containing `declare module '@wibetter/json-schema-editor/dist/index.umd';`",
// 	"source": "ts",
// 	"startLineNumber": 2,
// 	"startColumn": 30,
// 	"endLineNumber": 2,
// 	"endColumn": 75
// }]