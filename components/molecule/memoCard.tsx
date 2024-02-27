import Button from '@/components/atom/Button';

function MemoCard() {
  const handleClickShowAnswer = () => {
    console.log('답변 보기');
  };

  return (
    <div
      className={
        'flex flex-col items-center gap-2.5 h-4/5 w-full rounded-[2.5rem] shadow-my-shadow px-4 pt-4 pb-2.5'
      }
    >
      <div className={'h-4/5 w-full overflow-y-auto'}>
        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문
        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문
        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문
        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문
        메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문메모된 질문
      </div>
      <div className={'flex items-center h-1/5'}>
        <Button
          handle_click={handleClickShowAnswer}
          class_name={'h-full w-full bg-blue-400 px-1.5 rounded-2xl'}
        >
          <span>답변 보기</span>
        </Button>
      </div>
    </div>
  );
}

export default MemoCard;
