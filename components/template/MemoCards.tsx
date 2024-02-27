import MemoCard from '@/components/@home/randomMemoCard/memoCard';

function MemoCards() {
  return (
    <section className={'bg-black h-1/3 '}>
      <article
        className={
          'flex justify-center items-center  h-full w-full bg-white rounded-br-[2.5rem] p-4 '
        }
      >
        <MemoCard />
      </article>
    </section>
  );
}

export default MemoCards;
