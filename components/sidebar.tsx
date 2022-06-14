import NextImage from 'next/image';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryAdd,
  MdLibraryMusic,
  MdFavorite
} from 'react-icons/md';

const Sidebar = () => {
  return (
    <Box width="100px" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px">
        <Box width="150px" marginBottom="20px" paddingX="20px">
          <NextImage src="/trax.svg" height={60} width={60} />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar;