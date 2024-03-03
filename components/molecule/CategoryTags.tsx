import Span from '@/components/atom/Span';
import Hashtag from '@/components/atom/Hashtag';

interface CategoryTagsProps {
  spanTitle: string;
  categories: string[];
}

function CategoryTags(props: CategoryTagsProps) {
  return (
    <div className={'flex items-center gap-1'}>
      <Span content={props.spanTitle} style={'tag'} />
      <div className={'flex items-center gap-1 overflow-scroll scrollbar-hide'}>
        {props.categories.map((category) => (
          <Hashtag category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryTags;
