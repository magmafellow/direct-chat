export default function MessageArea() {
  const styles = {
    li: "bg-zinc-700 rounded-md mb-4 py-2 px-4 text-neutral-200 font-light antialiased max-w-[750px]",
    author: "text-blue-500 font-semibold tracking-wide",
    time: "text-neutral-400",
  };

  return (
    <div className="w-[95%] mb-10 mx-auto h-[50vh] rounded-xl bg-stone-800 border border-neutral-400 overflow-auto">
      <ul className="md:p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-5 items-center">
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
