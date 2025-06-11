export default function Form() {
  return (
    <div>
      <form>
        <div className="p-3 flex flex-col w-80">
          <label htmlFor="name">Name :</label>
          <input
            className="bg-gray-50 rounded-e-full ml-5 border border-black"
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            className="bg-gray-50 rounded-e-full ml-5 border border-black"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">Message :</label>
          <textarea
            className="bg-gray-50 rounded-e-full ml-5 border border-black"
            id="message"
            name="message"
          />

          <div className="p-4">
            <button
              className="bg-black rounded-full w-32 text-white"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
