interface SpanProps {
  prefix?: string;
  content: string;
  style: 'memoTitle' | 'tag';
}

const spanStyle: Record<string, string> = {
  memoTitle: 'line-clamp-2 overflow-hidden text-ellipsis text-base font-medium',
  tag: 'font-medium text-xs',
};

function Span(props: SpanProps) {
  return (
    <span className={spanStyle[props.style]}>
      {props.prefix}
      {props.content}
    </span>
  );
}

export default Span;
