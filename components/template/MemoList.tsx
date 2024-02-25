import MemoItem from '@/components/@home/memoList/MemoItem';

function MemoList() {
  const testObjList = [
    { id: 'm1', title: '메모1', category: ['test1'] },
    { id: 'm2', title: '메모2', category: ['test2'] },
    { id: 'm3', title: '메모3', category: ['test3'] },
    { id: 'm4', title: '메모4', category: ['test4'] },
    { id: 'm5', title: '메모5', category: ['test5'] },
    { id: 'm6', title: '메모6', category: ['test6'] },
    { id: 'm7', title: '메모7', category: ['test7'] },
    { id: 'm8', title: '메모8', category: ['test8'] },
    { id: 'm9', title: '메모9', category: ['test9'] },
    { id: 'm10', title: '메모10', category: ['test10'] },
    { id: 'm11', title: '메모11', category: ['test11'] },
    { id: 'm12', title: '메모12', category: ['test12'] },
  ];

  return (
    <section className={'bg-white h-2/3 w-full'}>
      <article
        className={
          'flex flex-col gap-3 h-full w-full bg-black rounded-tl-[2.5rem] py-7 px-4 text-white overflow-y-auto'
        }
      >
        {testObjList.map((test) => (
          <MemoItem key={test.id} title={test.title} category={test.category} />
        ))}
      </article>
    </section>
  );
}

export default MemoList;
