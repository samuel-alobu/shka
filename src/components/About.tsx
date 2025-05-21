type Props = {
  imageOrder: string;
  title: string;
  linkText: string;
  listItem: any;
  mainText: string;
  checkColor: string;
  linkColor: string;
  icon: string;
};

const About = ({
  imageOrder,
  linkText,
  title,
  listItem,
  mainText,
  checkColor,
  linkColor,
  icon,
}: Props) => {
  return (
    <div className="pt-16 pb-16">
      <div className=" container mx-auto w-11/12  flex items-center gap-12">
        {/* Text Content */}
        <div className="mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {mainText}
          </h1>
          {/* List */}
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <div
                  className={`bg-${checkColor} w-6 h-6 flex items-center justify-center flex-col rounded-full text-white`}
                >
                  {listItem.icon}
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {listItem.subText.map((text) => {
                    return (
                      <>
                        <div className="block py-2">{text}</div>
                      </>
                    );
                  })}
                </p>
              </p>
            </div>
            {/* Link */}
            <p
              className={`font-semibold bg-${linkColor} cursor-pointer hover:underline w-fit`}
            >
              {linkText}
            </p>
          </div>
        </div>
        {/* Image content */}
        <div className={`${imageOrder} w-2/4 `}>
          <img src={listItem.img} alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
