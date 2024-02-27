import Button from '@/components/atom/Button';
import Question from '@/components/atom/Question';

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
        'flex flex-col items-center gap-2.5 h-[70%] w-full rounded-[2.5rem] shadow-my-shadow px-2 pt-3 pb-4'
      }
    >
      <Question
        content={QuestionValue}
        className={
          'h-4/5 w-full overflow-y-auto scrollbar-hide text-[1.4rem] font-bold rounded-[2.5rem] px-5 py-5'
        }
      />
      <div className={'flex items-center h-1/5'}>
        <Button
          handle_click={handleClickShowAnswer}
          className={'h-full bg-bl px-2 rounded-2xl bg-black text-white'}
        >
          <span>Answer</span>
        </Button>
      </div>
    </div>
  );
}

export default MemoCard;
