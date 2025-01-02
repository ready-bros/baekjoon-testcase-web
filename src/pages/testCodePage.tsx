import { Editor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useRef } from 'react';
import { useTestCodeMutation } from '../store/server/runCode';

const INITIAL_CODE = `// 입력 값이 한 줄일 때\nconst input = require('fs').readFileSync(0).toString().trim();\n// 입력 값이 두 줄일 때\nconst input = require('fs').readFileSync(0).toString().trim().split('\\n');`;

export default function TestCodePage() {
  const { data, mutate, isPending } = useTestCodeMutation();
  const inputRef = useRef<null | HTMLTextAreaElement>(null);
  const answerRef = useRef<null | HTMLTextAreaElement>(null);
  const editorRef = useRef<null | editor.IStandaloneCodeEditor>(null);

  const showValue = async () => {
    if (!editorRef.current || !inputRef.current || !answerRef.current) return;

    if (inputRef.current.value.trim() === '') {
      alert('입력 값을 입력하세요.');
      return;
    }

    if (answerRef.current.value.trim() === '') {
      alert('출력 값을 입력하세요.');
      return;
    }

    mutate({
      language: 'javascript',
      code: editorRef.current.getValue(),
      input: inputRef.current.value,
      answer: answerRef.current.value,
      timeLimitSecond: 1000,
    });
  };

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  return (
    <main>
      <section>
        <label>
          입력
          <textarea ref={inputRef}></textarea>
        </label>
        <label>
          결과
          <textarea ref={answerRef}></textarea>
        </label>
      </section>
      <Editor onMount={handleEditorDidMount} height='45vh' theme='vs-dark' defaultLanguage='javascript' defaultValue={INITIAL_CODE} />
      <button onClick={showValue}>제출</button>
      <section>
        {isPending ? (
          <div>...테스트중입니다.</div>
        ) : (
          data && (
            <div>
              <p>결과: {data.result ? '통과' : '실패'}</p>
              <p>실행시간: {data.runtime}</p>
            </div>
          )
        )}
      </section>
    </main>
  );
}
