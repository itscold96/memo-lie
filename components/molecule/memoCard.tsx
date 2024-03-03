import Button from '@/components/atom/Button';
import Question from '@/components/atom/Question';
import { buttonStyle } from '@/components/style/styles';

function MemoCard() {
  const handleClickShowAnswer = () => {
    console.log('답변 보기');
  };

  const QuestionValue =
    '메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문\n' +
    '        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문\n' +
    '        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문\n' +
    '        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문\n' +
    '        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문';

  return (
    <div
      className={
        'flex h-[70%] w-full flex-col items-center gap-2.5 rounded-[2.5rem] px-2 pb-4 pt-3 shadow-my-shadow'
      }
    >
      <Question
        prefix={'Q.'}
        content={QuestionValue}
        className={
          'h-4/5 w-full overflow-y-auto rounded-[2.5rem] px-5 py-5 text-[1.4rem] font-bold scrollbar-hide'
        }
      />
      <div className={'flex h-1/5 items-center'}>
        <Button
          className={buttonStyle({ theme: 'card', size: 'small' })}
          handle_click={handleClickShowAnswer}
        >
          <span>Answer</span>
        </Button>
      </div>
    </div>
  );
}

export default MemoCard;
