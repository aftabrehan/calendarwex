import Stories from 'components/stories'
import Search from 'components/search'

const primary = {
  arg: 'Search',
}

const SearchStory = () => (
  <Stories argList={[primary]} template={args => <Search {...args} />} />
)

export default SearchStory
