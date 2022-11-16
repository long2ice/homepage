import { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";

export default function Beian() {
  const [needBeian, setNeedBeian] = useState(false);
  useEffect(() => {
    const hostname = window.location.hostname;
    if (hostname === "www.long2ice.com") {
      setNeedBeian(true);
    }
  }, []);
  return needBeian ? (
    <Link href="https://beian.miit.gov.cn" isExternal color="gray">
      渝ICP备2022012681号-1
    </Link>
  ) : null;
}
