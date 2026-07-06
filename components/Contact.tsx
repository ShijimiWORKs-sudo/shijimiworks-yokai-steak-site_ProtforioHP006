"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 実送信は行いません（ポートフォリオ用のダミー完了表示）
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">ご相談ください</h2>
          <p className="contact__lead">
            住宅、店舗、オフィスのインテリア・壁紙・配色・家具配置について、お気軽にご相談ください。まだイメージが固まっていない段階でも、現在のお悩みから一緒に整理します。
          </p>
          <div className="contact__info">
            <div>
              <span>Email</span>
              <p>hello@shijimiworks-interior.example.com</p>
            </div>
            <div>
              <span>Hours</span>
              <p>平日 10:00 – 18:00</p>
            </div>
            <div>
              <span>Area</span>
              <p>オンライン全国対応</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="form__done" role="status">
              <strong>Thank you.</strong>
              <p>
                お問い合わせありがとうございます。内容を確認のうえ、2〜3営業日以内にご返信します。
                <br />
                （こちらはポートフォリオ用のデモ表示です。実際の送信は行われません。）
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">
                  お名前 <em>*</em>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="山田 花子"
                />
              </div>
              <div className="field">
                <label htmlFor="company">会社名・店舗名</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="〇〇店 / 株式会社〇〇"
                />
              </div>
              <div className="field field--full">
                <label htmlFor="email">
                  メールアドレス <em>*</em>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="space">相談したい空間</label>
                <select id="space" name="space" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>住宅・個人宅</option>
                  <option>店舗</option>
                  <option>オフィス・事務所</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="topic">希望する相談内容</label>
                <select id="topic" name="topic" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>インテリア全体</option>
                  <option>配色・カラー</option>
                  <option>壁紙・素材</option>
                  <option>家具配置・レイアウト</option>
                  <option>照明</option>
                  <option>まだ決まっていない</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="visit">現地確認の希望</label>
                <select id="visit" name="visit" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>オンラインのみ希望</option>
                  <option>現地確認を希望</option>
                  <option>相談して決めたい</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="budget">予算感</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>〜3万円</option>
                  <option>3〜5万円</option>
                  <option>5〜10万円</option>
                  <option>10〜20万円</option>
                  <option>20万円以上</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="message">相談内容の詳細</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="現在のお悩みや、実現したい空間のイメージなどをお書きください。"
                />
              </div>
              <div className="form__submit">
                <button type="submit" className="btn">
                  送信する <span className="btn__arrow">→</span>
                </button>
                <span className="form__note">
                  ※ デモ用フォームです。実際の送信は行われません。
                </span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
