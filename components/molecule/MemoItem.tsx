import Span from '@/components/atom/Span';

interface MemoItemProps {
  title: string;
  category: string[];
}

function MemoItem(props: MemoItemProps) {
  return (
    <div
      className={
        'flex flex-col gap-2 rounded-[0.9rem] bg-white px-2 py-1.5  text-black'
      }
    >
      <Span
        prefix={'Q.'}
        content={props.title}
        className={
          'line-clamp-2 h-full w-full overflow-hidden text-ellipsis text-base font-medium'
        }
      />
      <div>카테고리들: {props.category}</div>
    </div>
  );
}

export default MemoItem;
