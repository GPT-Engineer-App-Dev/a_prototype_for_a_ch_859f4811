import { Box, VStack, HStack, Textarea, Button, Input, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Switch, FormControl, FormLabel, useToast, Image } from "@chakra-ui/react";
import { FaPaperclip, FaCloudDownloadAlt, FaPrint, FaCog, FaChevronDown, FaPlus, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure();
  const toast = useToast();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
    toast({
      title: "File uploaded.",
      description: `You have uploaded ${file.name}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDownloadChat = (format) => {
    // Handle downloading chat history here
    toast({
      title: "Chat downloaded.",
      description: `Your chat is downloaded in ${format} format.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePrintChat = () => {
    // Handle print logic here
    toast({
      title: "Chat printing.",
      description: "Your chat is being sent to the printer.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <HStack width="full" justifyContent="space-between">
          <Box boxSize="150px" position="relative">
            <Image src="https://images.unsplash.com/photo-1642334640124-c80d5e7e78d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGF2YXRhcnxlbnwwfHx8fDE3MTIzODQxMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" />
            <Button position="absolute" bottom="0" right="0" size="sm" onClick={() => document.getElementById("avatarUpload").click()}>
              <FaPlus />
            </Button>
            <Input id="avatarUpload" type="file" hidden onChange={handleFileUpload} />
          </Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="voice-toggle" mb="0">
              Voice Mode
            </FormLabel>
            <Switch id="voice-toggle" />
          </FormControl>
          <IconButton icon={<FaCog />} onClick={onSettingsOpen} />
        </HStack>

        <Box width="full" bg="gray.100" p={4} borderRadius="md" overflowY="auto" height="400px">
          {/* Chat messages will be displayed here */}
        </Box>

        <HStack width="full">
          <Button leftIcon={<FaPaperclip />} onClick={() => document.getElementById("fileUpload").click()}>
            Attach
          </Button>
          <Input id="fileUpload" type="file" hidden onChange={handleFileUpload} />
          <Textarea placeholder="Type your message here..." flexGrow="1" />
          <Button colorScheme="blue">Send</Button>
        </HStack>

        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaFileDownload />} onClick={() => handleDownloadChat("docx")}>
              Download as .docx
            </MenuItem>
            <MenuItem icon={<FaFileDownload />} onClick={() => handleDownloadChat("pdf")}>
              Download as .pdf
            </MenuItem>
            <MenuItem icon={<FaFileDownload />} onClick={() => handleDownloadChat("txt")}>
              Download as .txt
            </MenuItem>
            <MenuItem icon={<FaFileDownload />} onClick={() => handleDownloadChat("csv")}>
              Download as .csv
            </MenuItem>
            <MenuItem icon={<FaPrint />} onClick={handlePrintChat}>
              Print
            </MenuItem>
          </MenuList>
        </Menu>
      </VStack>

      {/* Settings Modal */}
      <Modal isOpen={isSettingsOpen} onClose={onSettingsClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bot Interaction Preferences</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* Settings form will be here */}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSettingsClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onSettingsClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
