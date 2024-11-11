import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <AnimatePresence>
      <ChakraProvider >
        <Suspense>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            test
          </motion.div>
        </Suspense>
      </ChakraProvider>
    </AnimatePresence>
);
