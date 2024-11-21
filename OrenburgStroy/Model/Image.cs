namespace OrenburgStroy.Model {

    /// <summary>
    /// Абстрактный класс изображений
    /// </summary>
    public abstract class Image {

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="id">Идентификатор</param>
        /// <param name="path">Путь к изображению</param>
        /// <param name="alt">Описание изображения</param>
        protected Image(Guid id, string path, string alt) {
            Id = id;
            Path = path;
            Alt = alt;
        }

        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get; private set; }

        /// <summary>
        /// Путь к изображению
        /// </summary>
        public string Path { get; private set; }

        /// <summary>
        /// Описание изображения
        /// </summary>
        public string Alt { get; private set; }
    }
}
