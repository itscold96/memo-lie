import Span from '@/components/atom/Span';
import CategoryTags from '@/components/molecule/CategoryTags';

interface MemoItemProps {
  title: string;
  categories: string[];
}

function MemoItem(props: MemoItemProps) {
  return (
    <div
      className={
        'flex flex-col gap-2 rounded-[0.9rem] bg-white px-2 py-1.5  text-black'
      }
    >
      <Span style={'memoTitle'} prefix={'Q.'} content={props.title} />
      <CategoryTags spanTitle={'Tags: '} categories={props.categories} />
    </div>
  );
}

export default MemoItem;
