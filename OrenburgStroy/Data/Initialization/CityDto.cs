namespace OrenburgStroy.Data.Initialization {
    public class CityDto {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Алиас
        /// </summary>
        public string Alias { get; set; } = string.Empty;

        /// <summary>
        /// Название города
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Коллекция проектов
        /// </summary>
        public List<ProjectDto> Projects { get; set; } = new List<ProjectDto>();
    }
}
