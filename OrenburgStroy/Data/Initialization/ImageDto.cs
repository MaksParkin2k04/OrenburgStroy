namespace OrenburgStroy.Data.Initialization {
    public class ImageDto {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get;  set; }

        /// <summary>
        /// Путь к изображению
        /// </summary>
        public string Path { get;  set; } = string.Empty;

        /// <summary>
        /// Описание изображения
        /// </summary>
        public string Alt { get;  set; } = string.Empty;
    }
}
