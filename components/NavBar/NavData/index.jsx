import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function index({ closeMenu }) {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className="dm-sans-regular"
              >
                <Link href={href} onClick={closeMenu} aria-label={`Go to ${title}`}>
                  <span>{title}</span>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          const isExternal = href.startsWith("http");

          return isExternal ? (
            <motion.a
              key={`f_${i}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <span className="flex items-center gap-1">
                {title} <LuArrowUpRight />
              </span>
            </motion.a>
          ) : (
            <Link href={href} legacyBehavior key={`f_${i}`}>
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.a>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
