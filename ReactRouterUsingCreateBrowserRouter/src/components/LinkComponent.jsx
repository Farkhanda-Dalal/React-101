import { Link} from 'react-router-dom'

const LinkComponent = () => {
  return (
    <>
      <Link to={'/list'}>Go to see recipe list</Link>
      <Link to={'/upload'}>Upload recipes</Link>
    </>
  )
}

export default LinkComponent