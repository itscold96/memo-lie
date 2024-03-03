interface QuestionProps {
  content: string;
  className: string;
  prefix?: string;
}

function Paragraph(props: QuestionProps) {
  return (
    <p className={props.className}>
      {props.prefix && props.prefix + ' '}
      {props.content}
    </p>
  );
}

export default Paragraph;
