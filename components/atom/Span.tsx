interface SpanProps {
  prefix: string;
  content: string;
  className: string;
}

function Span(props: SpanProps) {
  return (
    <span className={props.className}>
      {props.prefix} {props.content}
    </span>
  );
}

export default Span;
