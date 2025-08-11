"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

interface FAQItem {
  question: { [key: string]: string }
  answer: { [key: string]: string }
}

export function FAQSection() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const faqs: FAQItem[] = [
    {
      question: {
        en: "What makes Best Dates & Fruits dates special?",
        fr: "Qu'est-ce qui rend les dattes Best Dates & Fruits spéciales?",
        ar: "ما الذي يجعل تمور بست دايتس آند فروتس مميزة؟",
      },
      answer: {
        en: "Best Dates & Fruits dates are grown in the heart of Tunisia's Tozeur oasis, known for its ideal climate for date cultivation. Our dates are carefully selected, harvested at peak ripeness, and processed using traditional methods combined with modern technology to ensure the highest quality. We preserve the authenticity of our Deglet Nour dates and enhance them with 100% natural flavors.",
        fr: "Les dattes Best Dates & Fruits sont cultivées au cœur de l'oasis de Tozeur en Tunisie, connue pour son climat idéal pour la culture des dattes. Nos dattes sont soigneusement sélectionnées, récoltées à maturité optimale et transformées selon des méthodes traditionnelles combinées à la technologie moderne pour garantir la plus haute qualité. Nous préservons l'authenticité de nos dattes Deglet Nour et les enrichissons de saveurs 100% naturelles.",
        ar: "تُزرع تمور بست دايتس آند فروتس في قلب واحة توزر التونسية، المعروفة بمناخها المثالي لزراعة التمور. يتم اختيار تمورنا بعناية وحصادها في ذروة نضجها ومعالجتها باستخدام الطرق التقليدية جنبًا إلى جنب مع التكنولوجيا الحديثة لضمان أعلى جودة. نحافظ على أصالة تمور دقلة نور ونعززها بنكهات طبيعية 100٪.",
      },
    },
    {
      question: {
        en: "Are your dates organic?",
        fr: "Vos dattes sont-elles biologiques?",
        ar: "هل تمورك عضوية؟",
      },
      answer: {
        en: "Yes, we offer a range of certified organic dates grown without pesticides or chemical fertilizers. Our organic dates are cultivated using sustainable farming practices that respect the environment and preserve the natural ecosystem of the oasis.",
        fr: "Oui, nous proposons une gamme de dattes biologiques certifiées cultivées sans pesticides ni engrais chimiques. Nos dattes biologiques sont cultivées selon des pratiques agricoles durables qui respectent l'environnement et préservent l'écosystème naturel de l'oasis.",
        ar: "نعم، نقدم مجموعة من التمور العضوية المعتمدة المزروعة بدون مبيدات أو أسمدة كيميائية. تتم زراعة تمورنا العضوية باستخدام ممارسات زراعية مستدامة تحترم البيئة وتحافظ على النظام البيئي الطبيعي للواحة.",
      },
    },
    {
      question: {
        en: "How should I store Best Dates & Fruits dates?",
        fr: "Comment dois-je conserver les dattes Best Dates & Fruits?",
        ar: "كيف يجب أن أخزن تمور بست دايتس آند فروتس؟",
      },
      answer: {
        en: "For optimal freshness, store Best Dates & Fruits dates in an airtight container in a cool, dry place. They can be kept at room temperature for up to 6 months. For longer storage, refrigerate them for up to a year or freeze them for up to 5 years. If your dates become dry, you can rehydrate them by steaming them briefly or soaking them in warm water for a few minutes.",
        fr: "Pour une fraîcheur optimale, conservez les dattes Best Dates & Fruits dans un récipient hermétique dans un endroit frais et sec. Elles peuvent être conservées à température ambiante jusqu'à 6 mois. Pour une conservation plus longue, réfrigérez-les jusqu'à un an ou congelez-les jusqu'à 5 ans. Si vos dattes deviennent sèches, vous pouvez les réhydrater en les passant brièvement à la vapeur ou en les faisant tremper dans de l'eau tiède pendant quelques minutes.",
        ar: "للحصول على أقصى قدر من النضارة، احفظ تمور بست دايتس آند فروتس في وعاء محكم الغلق في مكان بارد وجاف. يمكن الاحتفاظ بها في درجة حرارة الغرفة لمدة تصل إلى 6 أشهر. للتخزين لفترة أطول، ضعها في الثلاجة لمدة تصل إلى عام أو جمدها لمدة تصل إلى 5 سنوات. إذا أصبحت التمور جافة، يمكنك إعادة ترطيبها عن طريق تبخيرها لفترة وجيزة أو نقعها في ماء دافئ لبضع دقائق.",
      },
    },
    {
      question: {
        en: "Do you ship internationally?",
        fr: "Livrez-vous à l'international?",
        ar: "هل تشحنون دوليًا؟",
      },
      answer: {
        en: "Yes, we ship our premium dates worldwide. Shipping times and costs vary depending on your location. We ensure that our packaging preserves the quality and freshness of our dates during transit. For specific information about shipping to your country, please contact our customer service team.",
        fr: "Oui, nous expédions nos dattes premium dans le monde entier. Les délais et les coûts d'expédition varient en fonction de votre emplacement. Nous veillons à ce que notre emballage préserve la qualité et la fraîcheur de nos dattes pendant le transport. Pour des informations spécifiques sur l'expédition vers votre pays, veuillez contacter notre équipe de service client.",
        ar: "نعم، نشحن تمورنا الفاخرة في جميع أنحاء العالم. تختلف أوقات وتكاليف الشحن حسب موقعك. نحن نضمن أن تعبئتنا تحافظ على جودة ونضارة تمورنا أثناء النقل. للحصول على معلومات محددة حول الشحن إلى بلدك، يرجى الاتصال بفريق خدمة العملاء لدينا.",
      },
    },
    {
      question: {
        en: "Are your dates suitable for people with dietary restrictions?",
        fr: "Vos dattes conviennent-elles aux personnes ayant des restrictions alimentaires?",
        ar: "هل تمورك مناسبة للأشخاص ذوي القيود الغذائية؟",
      },
      answer: {
        en: "Our natural dates are gluten-free, vegan, and contain no added sugars or preservatives, making them suitable for many dietary needs. However, some of our stuffed dates contain nuts or chocolate, so please check the product descriptions for specific ingredients. If you have severe allergies or specific dietary concerns, feel free to contact us for detailed information.",
        fr: "Nos dattes naturelles sont sans gluten, végétaliennes et ne contiennent pas de sucres ajoutés ou de conservateurs, ce qui les rend adaptées à de nombreux besoins alimentaires. Cependant, certaines de nos dattes farcies contiennent des noix ou du chocolat, veuillez donc consulter les descriptions des produits pour connaître les ingrédients spécifiques. Si vous avez des allergies graves ou des préoccupations alimentaires spécifiques, n'hésitez pas à nous contacter pour des informations détaillées.",
        ar: "تمورنا الطبيعية خالية من الغلوتين ونباتية ولا تحتوي على سكريات مضافة أو مواد حافظة، مما يجعلها مناسبة للعديد من الاحتياجات الغذائية. ومع ذلك، تحتوي بعض تمورنا المحشوة على مكسرات أو شوكولاتة، لذا يرجى التحقق من أوصاف المنتج للحصول على مكونات محددة. إذا كنت تعاني من حساسية شديدة أو مخاوف غذائية محددة، فلا تتردد في الاتصال بنا للحصول على معلومات مفصلة.",
      },
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bdf-darkgold mb-4 font-serif">
            {language === "en"
              ? "Frequently Asked Questions"
              : language === "fr"
                ? "Questions Fréquemment Posées"
                : "الأسئلة المتكررة"}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {language === "en"
              ? "Find answers to common questions about our products, shipping, and more."
              : language === "fr"
                ? "Trouvez des réponses aux questions courantes sur nos produits, l'expédition et plus encore."
                : "ابحث عن إجابات للأسئلة الشائعة حول منتجاتنا والشحن والمزيد."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto" dir={isRTL ? "rtl" : "ltr"}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-bdf-darkgold hover:text-bdf-gold">
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer[language]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700">
            {language === "en"
              ? "Can't find the answer you're looking for?"
              : language === "fr"
                ? "Vous ne trouvez pas la réponse que vous cherchez?"
                : "لم تجد الإجابة التي تبحث عنها؟"}
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 text-bdf-gold hover:text-bdf-darkgold font-medium transition-colors"
          >
            {language === "en" ? "Contact our team" : language === "fr" ? "Contactez notre équipe" : "تواصل مع فريقنا"}
          </a>
        </div>
      </div>
    </section>
  )
}
