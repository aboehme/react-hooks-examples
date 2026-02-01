
import { useMemo, useState } from "react";

export default function CharacterCounter() {
  const MAX = 120;

  const [text, setText] = useState("");

  // Derived values (computed from state)
  const count = text.length;
  const remaining = MAX - count;

  // Simple validation rules
  const isOverLimit = remaining < 0;
  const isNearLimit = remaining >= 0 && remaining <= 10;

  const helperText = useMemo(() => {
    if (isOverLimit) return `Over the limit by ${Math.abs(remaining)} character(s).`;
    if (isNearLimit) return `${remaining} character(s) remaining — almost at the limit.`;
    return `${remaining} character(s) remaining.`;
  }, [isOverLimit, isNearLimit, remaining]);

  return (
    <div className="card">
      <h4>Character Counter</h4>

      <label htmlFor="message">
        Message <span aria-hidden="true">*</span>
      </label>

      <textarea
        id="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder={`Type up to ${MAX} characters...`}
        aria-invalid={isOverLimit}
        aria-describedby="counter-help"
      />

      <div
        id="counter-help"
        role={isOverLimit ? "alert" : "status"}
        aria-live={isOverLimit ? "assertive" : "polite"}
        style={{ marginTop: 8 }}
      >
        <div>
          Count: <strong>{count}</strong> / {MAX}
        </div>

        <div>
          {isOverLimit ? "❌ " : isNearLimit ? "⚠️ " : "✅ "}
          {helperText}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <button type="button" disabled={isOverLimit || count === 0}>
          Submit
        </button>
        <button type="button" onClick={() => setText("")} style={{ marginLeft: 8 }}>
          Clear
        </button>
      </div>
    </div>
  );
}
