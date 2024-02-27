interface MemoItemProps {
  title: string;
  category: string[];
}

function MemoItem(props: MemoItemProps) {
  return (
    <div
      className={
        'flex flex-col bg-white text-black px-2 py-1.5 rounded-[0.9rem] gap-2'
      }
    >
      <div>{props.title}</div>
      <div>카테고리들: {props.category}</div>
    </div>
  );
}

export default MemoItem;
