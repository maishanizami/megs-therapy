export default function About() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24 max-w-4xl mx-auto">

      <div className="mb-10 lg:mb-14">
        <h4 className="text-[#6B8E6E] font-bold mb-2 uppercase tracking-wide text-sm">
          Meet Your Therapist
        </h4>
        <h1
          className="text-4xl lg:text-5xl font-bold text-green-900"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          About
        </h1>
      </div>

      {/* Photo */}
      <div className="mb-10 lg:mb-14 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#8FA98F]/40 bg-[#EFE9DC]">
          <img
            src="/meg.jpg"
            alt="Margaret Tuimising, therapist"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-10 text-center">
        <h2
          className="text-2xl lg:text-3xl font-bold text-green-800"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Margaret Tuimising (Meg)
        </h2>
        <p className="text-[#A67C52] font-semibold mt-1 text-sm lg:text-base">
          MMFT, RMFT
        </p>
      </div>

      <div className="flex flex-col gap-6 text-green-800/90 text-base lg:text-lg leading-relaxed">
        <p>
          Margaret &ldquo;Meg&rdquo; Tuimising is a Registered Marriage and Family Therapist
          (RMFT) with a Master&rsquo;s degree in Marriage and Family Therapy (MMFT)
          and is a Registered Practitioner with the Canadian Association for Marriage
          and Family Therapy (CAMFT).
        </p>

        <p>
          Meg brings a wealth of experience gained over several years of working
          with diverse clients with a wide range of concerns. She provides individual
          therapy, couples therapy, pre-marital counselling, and family therapy.
        </p>

        <p>
          Meg considers it a privilege to be trusted to share a part of her clients&rsquo;
          journeys. She strives to create a safe, compassionate, and confidential
          space where clients can feel heard, understood, and respected. She
          approaches this sacred work with curiosity, respect, and faith, recognizing
          that each person brings their own unique experiences, relationships, and
          stories. Together, Meg and her clients explore ways to find hope, build
          resilience, and develop healthier ways of coping amidst the challenges of
          life.
        </p>

        <p>
          Meg&rsquo;s goal is to support clients in discovering solutions and strengths both
          within themselves and within their relationships. She views therapy as a
          collaborative process, working alongside her clients. She takes joy in
          witnessing clients reconnect with themselves and their loved ones,
          strengthen meaningful relationships, and make progress toward the life and
          goals that matter most to them.
        </p>

        <div className="border-t border-[#8FA98F]/30 my-4" />

        <p>
          Outside of her therapeutic work, Meg enjoys spending time outdoors,
          camping, travelling, stargazing, and reading. She is a proud mother and
          grandmother, as well as a sister, partner, daughter, and friend. These
          relationships and experiences are an important part of who she is and
          continue to shape her appreciation for the richness, complexity, and
          resilience of family and human connection.
        </p>
      </div>

    </section>
  );
}
