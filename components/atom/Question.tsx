interface QuestionProps {
  content: string;
  className: string;
}

function Question(props: QuestionProps) {
  return <p className={props.className}>{props.content}</p>;
}

export default Question;
