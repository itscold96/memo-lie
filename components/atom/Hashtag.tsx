import Span from '@/components/atom/Span';
import Button from '@/components/atom/Button';
import { buttonStyle } from '@/components/style/styles';

interface HashtagProps {
  category: string;
}

function Hashtag(props: HashtagProps) {
  return (
    <Button
      handle_click={() => console.log('해시태그 클릭')}
      className={buttonStyle({ mode: 'hashtag', size: 'small' })}
    >
      #{props.category}
    </Button>
  );
}

export default Hashtag;
