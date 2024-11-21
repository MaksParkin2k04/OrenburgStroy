namespace OrenburgStroy.Model {

    /// <summary>
    /// Изображения проекта
    /// </summary>
    public class ImageProject : Image {

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="id">Идентификатор</param>
        /// <param name="path">Путь к изображению</param>
        /// <param name="alt">Описание изображения</param>
        protected ImageProject(Guid id, string path, string alt) : base(id, path, alt) { }

        /// <summary>
        /// Создает экземпляр объекта ImageProject
        /// </summary>
        /// <param name="path">Путь к изображению</param>
        /// <param name="alt">Описание изображения</param>
        /// <returns>Созданный объект</returns>
        public static ImageProject Create(string path, string alt) {
            return new ImageProject(Guid.Empty, path, alt);
        }
    }
}
