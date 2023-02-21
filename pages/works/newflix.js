import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HULU">
    <Container>
      <Title>
        HULU <Badge>2022-</Badge>
      </Title>
      <P>
        A clone of HULU streaming website using Next js and tmdb api.
        Along with lazy loading and responsive design using Tailwind CSS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hulu-clone-yt-f.vercel.app/">
          https://hulu-clone-yt-f.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next JS /</span>
          <span>Tailwind CSS</span>
          
          
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/hulu.PNG" alt="Inkdrop" />
      <WorkImage src="/images/works/hulu2.PNG" alt="Inkdrop" />
      {/* <WorkImage src="/images/works/newflix2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/newflix2.png" alt="Inkdrop" /> */}
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
