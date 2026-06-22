"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaCircleChevronLeft } from "react-icons/fa6";

const QUESTION_WORDS = new Set([
  "who",
  "what",
  "when",
  "where",
  "why",
  "how",
  "which",
  "whom",
  "whose",
]);

const AUXILIARIES = new Set([
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "has",
  "have",
  "had",
  "do",
  "does",
  "did",
  "will",
  "shall",
  "can",
  "could",
  "may",
  "might",
  "must",
  "should",
  "would",
]);

const BE_VERBS = new Set([
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
]);

const MODALS = new Set([
  "will",
  "shall",
  "can",
  "could",
  "may",
  "might",
  "must",
  "should",
  "would",
]);

const PRONOUNS = new Set([
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
  "my",
  "your",
  "his",
  "its",
  "our",
  "their",
  "mine",
  "yours",
  "hers",
  "ours",
  "theirs",
]);

const DETERMINERS = new Set([
  "a",
  "an",
  "the",
  "this",
  "that",
  "these",
  "those",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "each",
  "every",
  "some",
  "any",
  "many",
  "much",
  "few",
  "several",
  "no",
]);

const PREPOSITIONS = new Set([
  "in",
  "on",
  "at",
  "by",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "off",
  "over",
  "under",
  "again",
  "further",
  "inside",
  "outside",
  "near",
  "behind",
  "beside",
  "around",
  "of",
  "for",
  "as",
  "like",
  "within",
  "without",
]);

const CONJUNCTIONS = new Set([
  "and",
  "but",
  "or",
  "so",
  "yet",
  "nor",
  "because",
  "although",
  "though",
  "while",
  "if",
  "when",
  "since",
  "unless",
  "until",
  "after",
  "before",
  "once",
]);

const COMMON_VERBS = new Set([
  "go",
  "goes",
  "went",
  "gone",
  "come",
  "comes",
  "came",
  "eat",
  "eats",
  "ate",
  "eaten",
  "make",
  "makes",
  "made",
  "see",
  "sees",
  "saw",
  "seen",
  "take",
  "takes",
  "took",
  "taken",
  "get",
  "gets",
  "got",
  "gotten",
  "give",
  "gives",
  "gave",
  "given",
  "write",
  "writes",
  "wrote",
  "written",
  "run",
  "runs",
  "ran",
  "running",
  "walk",
  "walks",
  "walked",
  "play",
  "plays",
  "played",
  "study",
  "studies",
  "studied",
  "read",
  "reads",
  "reading",
  "sleep",
  "sleeps",
  "slept",
  "say",
  "says",
  "said",
  "tell",
  "tells",
  "told",
  "think",
  "thinks",
  "thought",
  "know",
  "knows",
  "knew",
  "known",
  "want",
  "wants",
  "wanted",
  "need",
  "needs",
  "needed",
  "like",
  "likes",
  "liked",
  "love",
  "loves",
  "loved",
  "help",
  "helps",
  "helped",
  "find",
  "finds",
  "found",
  "look",
  "looks",
  "looked",
  "watch",
  "watches",
  "watched",
  "build",
  "builds",
  "built",
  "eat",
  "drink",
  "drinks",
  "drank",
  "drinked",
  "close",
  "opens",
  "open",
  "opened",
  "talk",
  "talks",
  "talked",
  "move",
  "moves",
  "moved",
  "start",
  "starts",
  "started",
  "finish",
  "finishes",
  "finished",
  "arrive",
  "arrives",
  "arrived",
  "leave",
  "leaves",
  "left",
]);

const COMMON_NOUNS = new Set([
  "boy",
  "girl",
  "man",
  "woman",
  "student",
  "teacher",
  "dog",
  "cat",
  "book",
  "car",
  "house",
  "school",
  "friend",
  "friends",
  "mother",
  "father",
  "brother",
  "sister",
  "apple",
  "food",
  "water",
  "time",
  "day",
  "night",
  "city",
  "country",
  "world",
  "game",
  "phone",
  "computer",
  "name",
  "work",
  "job",
  "idea",
  "problem",
  "sentence",
  "grammar",
]);

function cleanWord(word) {
  return word.replace(/^[^a-zA-Z']+|[^a-zA-Z']+$/g, "").toLowerCase();
}

function tokenize(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => ({ raw: word, clean: cleanWord(word) }))
    .filter((item) => item.clean.length > 0);
}

function isVerbLike(word) {
  if (!word) return false;
  if (AUXILIARIES.has(word)) return true;
  if (COMMON_VERBS.has(word)) return true;
  if (word.endsWith("ing")) return true;
  if (word.endsWith("ed")) return true;
  if (word.endsWith("en")) return true;
  if (word.endsWith("s") && COMMON_VERBS.has(word.slice(0, -1))) return true;
  return false;
}

function isNounLike(word) {
  if (!word) return false;
  if (PRONOUNS.has(word)) return true;
  if (COMMON_NOUNS.has(word)) return true;
  if (DETERMINERS.has(word)) return true;
  return /^[a-z][a-z'-]*$/i.test(word);
}

function getSentenceType(sentence, tokens) {
  const trimmed = sentence.trim();
  if (!trimmed) {
    return { type: "Unknown", mood: "Unknown" };
  }

  const first = tokens[0]?.clean || "";
  const second = tokens[1]?.clean || "";
  const hasQuestionMark = trimmed.endsWith("?");
  const hasExclamationMark = trimmed.endsWith("!");
  const startsWithQuestionWord = QUESTION_WORDS.has(first);
  const startsWithAux = AUXILIARIES.has(first);
  const startsWithVerb = isVerbLike(first) && !PRONOUNS.has(first);

  let type = "Declarative";
  if (hasQuestionMark || startsWithQuestionWord || startsWithAux) {
    type = "Interrogative";
  } else if (hasExclamationMark) {
    type = "Exclamatory";
  } else if (startsWithVerb && !PRONOUNS.has(second)) {
    type = "Imperative";
  }

  let mood = "Statement";
  if (type === "Interrogative") mood = "Question";
  if (type === "Exclamatory") mood = "Strong emotion";
  if (type === "Imperative") mood = "Command / request";

  return { type, mood };
}

function findMainVerbIndex(tokens) {
  if (!tokens.length) return -1;

  // Priority 1: a clear lexical verb after an auxiliary.
  for (let i = 1; i < tokens.length; i++) {
    if (
      AUXILIARIES.has(tokens[i - 1].clean) &&
      isVerbLike(tokens[i].clean) &&
      !AUXILIARIES.has(tokens[i].clean)
    ) {
      return i;
    }
  }

  // Priority 2: first obvious verb-like token.
  for (let i = 0; i < tokens.length; i++) {
    if (isVerbLike(tokens[i].clean)) return i;
  }

  // Priority 3: fallback to a likely noun/verb split.
  return -1;
}

function collectNounPhraseLeft(tokens, verbIndex) {
  if (verbIndex <= 0) return "";

  let start = verbIndex - 1;
  while (start >= 0) {
    const w = tokens[start].clean;
    if (CONJUNCTIONS.has(w) || PREPOSITIONS.has(w) || AUXILIARIES.has(w)) break;
    if (w === ",") break;
    start -= 1;
  }

  const slice = tokens.slice(start + 1, verbIndex).map((t) => t.raw);
  return slice.join(" ").trim();
}

function collectObjectPhrase(tokens, verbIndex) {
  if (verbIndex < 0 || verbIndex >= tokens.length - 1) return "";

  let start = verbIndex + 1;
  // Skip auxiliaries right after the main verb if they appear in a verb phrase.
  while (start < tokens.length && AUXILIARIES.has(tokens[start].clean))
    start += 1;

  const collected = [];
  for (let i = start; i < tokens.length; i++) {
    const w = tokens[i].clean;
    if (!w) continue;
    if (CONJUNCTIONS.has(w) || PREPOSITIONS.has(w)) break;
    if (w === ",") break;
    collected.push(tokens[i].raw);
  }

  return collected.join(" ").trim();
}

function findSubjectObjectVerb(sentence) {
  const trimmed = sentence.trim();
  const tokens = tokenize(trimmed);

  if (!trimmed || tokens.length === 0) {
    return {
      sentenceType: "Unknown",
      mood: "Unknown",
      subject: "N/A",
      verb: "N/A",
      object: "N/A",
      auxiliary: "N/A",
      notes: ["No sentence entered."],
    };
  }

  const { type: sentenceType, mood } = getSentenceType(trimmed, tokens);
  const verbIndex = findMainVerbIndex(tokens);

  let subject = "N/A";
  let verb = "N/A";
  let object = "N/A";
  let auxiliary = "N/A";
  const notes = [];

  if (verbIndex === -1) {
    notes.push(
      "No clear verb found. This sentence may need a larger verb dictionary.",
    );
    if (sentenceType === "Imperative") {
      subject = "You (implied)";
    }
    return { sentenceType, mood, subject, verb, object, auxiliary, notes };
  }

  const verbToken = tokens[verbIndex];
  verb = verbToken.raw;

  const auxIndex = tokens.findIndex(
    (t, i) => i < verbIndex && AUXILIARIES.has(t.clean),
  );
  if (auxIndex !== -1) {
    auxiliary = tokens[auxIndex].raw;
  }

  if (sentenceType === "Imperative") {
    subject = "You (implied)";
    object = collectObjectPhrase(tokens, verbIndex) || "N/A";
    return { sentenceType, mood, subject, verb, object, auxiliary, notes };
  }

  // Interrogative inversion handling: "Is the boy running?"
  if (sentenceType === "Interrogative" && AUXILIARIES.has(tokens[0].clean)) {
    auxiliary = tokens[0].raw;

    const afterAux = tokens.slice(1);
    const afterAuxVerbIndex = findMainVerbIndex(afterAux);

    if (afterAuxVerbIndex !== -1) {
      const realVerbToken = afterAux[afterAuxVerbIndex];
      verb = realVerbToken.raw;
      const subjectTokens = afterAux.slice(0, afterAuxVerbIndex);
      subject =
        subjectTokens
          .map((t) => t.raw)
          .join(" ")
          .trim() || "N/A";
      object = collectObjectPhrase(afterAux, afterAuxVerbIndex) || "N/A";
      return { sentenceType, mood, subject, verb, object, auxiliary, notes };
    }
  }

  // Question word questions: "What did the boy eat?"
  if (sentenceType === "Interrogative" && QUESTION_WORDS.has(tokens[0].clean)) {
    const auxOrVerbIndex = tokens.findIndex(
      (t, i) => i > 0 && (AUXILIARIES.has(t.clean) || isVerbLike(t.clean)),
    );
    if (auxOrVerbIndex !== -1) {
      if (AUXILIARIES.has(tokens[auxOrVerbIndex].clean))
        auxiliary = tokens[auxOrVerbIndex].raw;
      const postQuestionTokens = tokens.slice(1);
      const postVerbIndex = findMainVerbIndex(postQuestionTokens);
      if (postVerbIndex !== -1) {
        verb = postQuestionTokens[postVerbIndex].raw;
        subject =
          collectNounPhraseLeft(postQuestionTokens, postVerbIndex) || "N/A";
        object =
          collectObjectPhrase(postQuestionTokens, postVerbIndex) || "N/A";
        return { sentenceType, mood, subject, verb, object, auxiliary, notes };
      }
    }
  }

  subject = collectNounPhraseLeft(tokens, verbIndex) || "N/A";
  object = collectObjectPhrase(tokens, verbIndex) || "N/A";

  // Extra fallback for very short or weird sentences.
  if (subject === "N/A" && tokens.length > 1) {
    subject =
      tokens
        .slice(0, verbIndex)
        .map((t) => t.raw)
        .join(" ")
        .trim() || tokens[0].raw;
  }

  if (object === "N/A" && verbIndex < tokens.length - 1) {
    const afterVerb = tokens
      .slice(verbIndex + 1)
      .map((t) => t.raw)
      .join(" ")
      .trim();
    if (afterVerb) object = afterVerb;
  }

  // Pull out extra clues for reporting.
  if (
    AUXILIARIES.has(tokens[verbIndex].clean) &&
    verbIndex < tokens.length - 1
  ) {
    notes.push(
      "The verb looks like an auxiliary/helping verb, so the real action may come after it.",
    );
  }

  if (sentenceType === "Declarative" && verbIndex === 0 && !subject) {
    notes.push("This may be an imperative sentence with an implied subject.");
  }

  return { sentenceType, mood, subject, verb, object, auxiliary, notes };
}

function ResultCard({ title, value, hint }) {
  return (
    <div className="rounded-2xl border border-black/20 bg-white/70 p-5 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-xl font-medium text-black">{value}</p>
      {hint ? <p className="mt-2 text-sm text-black/60">{hint}</p> : null}
    </div>
  );
}

export default function Page() {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState(null);

  const example = useMemo(() => "The boy is running to school.", []);

  const handleAnalyze = () => {
    setResult(findSubjectObjectVerb(sentence));
  };

  return (
    <section className="min-h-screen bg-[#a7a7a7]">
      <div className="border-b border-black/50 bg-[#d3d3d3] p-5">
        <Link href="/searchSection" className="inline-block">
          <FaCircleChevronLeft
            title="Go back"
            className="text-[30px] hover:text-[#303030] sm:text-[50px]"
          />
        </Link>

        <h2 className="text-center text-[25px] font-thin sm:text-[60px]">
          -The Sentence Analyzer-
        </h2>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-2xl border border-black/20 bg-white/40 p-5 shadow-md backdrop-blur">
          <label className="mb-2 block text-sm font-medium text-black/80">
            Enter a sentence
          </label>

          <input
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder={`Example: ${example}`}
            className="w-full rounded-xl border border-black/30 bg-white px-4 py-3 outline-none transition focus:border-black/60"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleAnalyze}
              className="rounded-xl bg-black px-5 py-3 text-white transition hover:bg-black/80"
            >
              Analyze
            </button>

            <button
              onClick={() => setSentence(example)}
              className="rounded-xl border border-black/30 bg-white px-5 py-3 text-black transition hover:bg-black/5"
            >
              Use example
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ResultCard
              title="Sentence Type"
              value={result.sentenceType}
              hint={result.mood}
            />
            <ResultCard title="Subject" value={result.subject} />
            <ResultCard
              title="Verb"
              value={result.verb}
              hint={
                result.auxiliary !== "N/A"
                  ? `Auxiliary: ${result.auxiliary}`
                  : ""
              }
            />
            <ResultCard title="Object" value={result.object} />
            <div className="rounded-2xl border border-black/20 bg-white/70 p-5 shadow-sm md:col-span-2 xl:col-span-3">
              <h3 className="mb-2 text-lg font-semibold">Notes</h3>
              {result.notes?.length ? (
                <ul className="list-disc space-y-1 pl-5 text-black/80">
                  {result.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-black/70">No extra notes.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
