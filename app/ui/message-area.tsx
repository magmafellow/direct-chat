export default function MessageArea() {
  const styles = {
    li: "bg-neutral-700 rounded-md mb-4 py-2 px-4 text-neutral-200 font-light antialiased",
    author: "text-blue-500",
    time: "text-neutral-400",
  };

  return (
    <div className="w-[75%] mb-10 mx-auto h-[50vh] rounded-xl bg-neutral-600 border border-neutral-400 overflow-auto">
      <ul className="p-16">
        <li className={styles.li}>
          <div className="flex justify-between mb-2">
            <span className={styles.author}>Author1</span>
            <span className={styles.time}>20:09</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            consequatur beatae fugiat maxime iure architecto dolores reiciendis?
            Quisquam voluptatem quaerat veniam molestiae totam. Sit aperiam odit
            eligendi est vitae consectetur tenetur velit, quidem magnam ab ipsum
            quam accusamus laudantium fugit at porro reprehenderit. Voluptate
            consequuntur ut alias, autem vero explicabo.
          </p>
        </li>
        <li className={styles.li}>
          <div className="flex justify-between mb-2">
            <span className={styles.author}>Author2</span>
            <span className={styles.time}>21:20</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at
            placeat quo maiores voluptatum optio esse nobis, adipisci est, vel
            libero temporibus doloribus? Praesentium, et. Nemo, cupiditate, rem
            dolore voluptatem nulla quae vitae repellendus soluta laudantium
            error veritatis ab vero natus tempora cum explicabo quos.
          </p>
        </li>
        <li className={styles.li}>
          <div className="flex justify-between mb-2">
            <span className={styles.author}>Author3</span>
            <span className={styles.time}>21:37</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam vero maxime doloremque velit vel!
          </p>
        </li>
      </ul>
    </div>
  );
}
