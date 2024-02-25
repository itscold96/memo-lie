import MemoCards from '@/components/template/MemoCards';
import MemoList from '@/components/template/MemoList';

export default function Home() {
  return (
    <main className={'h-full w-full'}>
      <MemoCards />
      <MemoList />
    </main>
  );
}
