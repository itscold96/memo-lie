import MemoItem from '@/components/molecule/MemoItem';

function MemoList() {
  const testObjList = [
    {
      id: 'm1',
      title:
        '메모jdsahdjksahdkjsahdjksa jsadhjk sadjhsajkdh asjdhasjdh sidjsoaio sidjasidojusah sdsadsa ssadsadsadduis',
      categories: ['test1'],
    },
    {
      id: 'm2',
      title: '메모2',
      categories: ['test2', 'test2', 'test2', 'test2'],
    },
    { id: 'm3', title: '메모3', categories: ['test3'] },
    {
      id: 'm4',
      title: '메모4',
      categories: [
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
        'test4',
      ],
    },
    { id: 'm5', title: '메모5', categories: ['test5'] },
    { id: 'm6', title: '메모6', categories: ['test6'] },
    { id: 'm7', title: '메모7', categories: ['test7'] },
    { id: 'm8', title: '메모8', categories: ['test8'] },
    { id: 'm9', title: '메모9', categories: ['test9'] },
    { id: 'm10', title: '메모10', categories: ['test10'] },
    { id: 'm11', title: '메모11', categories: ['test11'] },
    { id: 'm12', title: '메모12', categories: ['test12'] },
  ];

  return (
    <section className={'h-2/3 w-full'}>
      <article
        className={
          'flex h-full w-full flex-col gap-3 overflow-y-auto rounded-tl-[2.5rem] bg-black px-4 py-7 text-white scrollbar-hide'
        }
      >
        {testObjList.map((test) => (
          <MemoItem
            key={test.id}
            title={test.title}
            categories={test.categories}
          />
        ))}
      </article>
    </section>
  );
}

export default MemoList;
