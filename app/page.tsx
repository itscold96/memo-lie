export default function Home() {
  return (
    <main className={'h-full w-full'}>
      <div className={'flex-col h-full w-full'}>
        <section className={'bg-white  h-1/3'}>
          <article
            className={
              'h-full w-full bg-black rounded-br-[2.5rem] text-white p-4 '
            }
          >
            random
          </article>
        </section>
        <section className={'bg-black h-full w-full'}>
          <article
            className={'h-full w-full bg-white rounded-tl-[2.5rem] p-4 '}
          >
            cards
          </article>
        </section>
      </div>
    </main>
  );
}
