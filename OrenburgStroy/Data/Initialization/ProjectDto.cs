using OrenburgStroy.Model;

namespace OrenburgStroy.Data.Initialization {
    public class ProjectDto {

        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Алиас
        /// </summary>
        public string Alias { get; set; } = string.Empty;

        /// <summary>
        /// Название проекта
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Описание проекта
        /// </summary>
        public string Description { get; set; } = string.Empty;

        /// <summary>
        /// Коллекция изображений проекта
        /// </summary>
        public List<ImageDto> Images { get; set; } = new List<ImageDto>();
    }
}
