import Stories from 'components/stories'
import StructureColumn from 'components/structure'

const structure = {
  arg: 'structure',
}

const StructureColumnStory = () => (
  <Stories
    argList={[structure]}
    template={args => <StructureColumn {...args} />}
  />
)

export default StructureColumnStory
