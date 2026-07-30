import Image from "next/image";
import styles from "./AvatarGroup.module.css";

export default function AvatarGroup({
  members = [],
  max = 4,
}) {
  const visible = members.slice(0, max);
  const remaining = members.length - max;

  return (
    <div className={styles.group}>
      {visible.map((member) => (
        <div
          key={member.id}
          className={styles.avatar}
        >
          <Image
            src={member.avatar}
            alt={member.name}
            width={34}
            height={34}
          />
        </div>
      ))}

      {remaining > 0 && (
        <div className={styles.more}>
          +{remaining}
        </div>
      )}
    </div>
  );
}