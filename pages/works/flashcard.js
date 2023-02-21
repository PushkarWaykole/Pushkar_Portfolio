import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Image from 'next/image';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import img1 from './flash1.PNG'
import img2 from './flash2.PNG'
import img3 from './flash3.PNG'

const Work = () => (
  <Layout title="Flash Card App">
    <Container>
      <Title>
        Flash Card App <Badge>2022</Badge>
      </Title>
      <P>
        A Flash card generator app which generate random Flashcards of the selected topic and when the user clicks on it the card revels the answer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Js</span>
        </ListItem>
        <ListItem>
          <Meta>Link to website</Meta>
          <Link href="https://csb-uegijl.netlify.app/">
            Flash Card <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>


      </List>








      <Image src={img1} height="300"
        width="600" alt="walknote" />
      <Image src={img2} height="300"
        width="600" alt="walknote" />
      <Image src={img3} height="300"
        width="600" alt="walknote" />
     
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
