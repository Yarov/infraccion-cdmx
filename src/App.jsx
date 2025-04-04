import React, { useState, useEffect } from "react";
import {
  Search,
  Info,
  AlertTriangle,
  Shield,
  Home,
  Users,
  FileText,
} from "lucide-react";
import Card from "./components/Card";
import CategoryFilter from "./components/CategoryFilter";
import baseDeConocimiento from "./data/baseDeConocimiento";

// Componente principal App
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [filteredInfractions, setFilteredInfractions] = useState([]);

  // Categorías para filtrar
  const categories = [
    { label: "Todos", value: "todos", icon: <Info size={16} /> },
    {
      label: "Dignidad",
      value: "Contra la dignidad de las personas",
      icon: <Users size={16} />,
    },
    {
      label: "Tranquilidad",
      value: "Contra la tranquilidad de las personas",
      icon: <AlertTriangle size={16} />,
    },
    {
      label: "Seguridad",
      value: "Contra la seguridad ciudadana",
      icon: <Shield size={16} />,
    },
    {
      label: "Entorno Urbano",
      value: "Contra el entorno urbano de la Ciudad",
      icon: <Home size={16} />,
    },
  ];

  // Filtra las infracciones según búsqueda y categoría activa
  useEffect(() => {
    let result = baseDeConocimiento.infracciones;

    // Filtrar por categoría si no es "todos"
    if (activeCategory !== "todos") {
      result = result.filter(
        (infraccion) => infraccion.tipo === activeCategory
      );
    }

    // Filtrar por término de búsqueda
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (infraccion) =>
          infraccion.descripcion.toLowerCase().includes(query) ||
          `artículo ${infraccion.articulo}`.toLowerCase().includes(query) ||
          `fracción ${infraccion.fraccion}`.toLowerCase().includes(query)
      );
    }

    setFilteredInfractions(result);
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="mr-2" size={28} />
              <h1 className="text-2xl font-bold">Consulta Cívica CDMX</h1>
            </div>
          </div>
          <p className="mt-2 text-blue-100">
            Consulta las infracciones de la Ley de Cultura Cívica de la Ciudad
            de México
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Busca por descripción, artículo o fracción..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Results */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">
            {filteredInfractions.length} resultados encontrados
          </h2>

          {filteredInfractions.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredInfractions.map((infraccion) => (
                <Card key={infraccion.id} infraccion={infraccion} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No se encontraron infracciones que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            Aplicación de consulta basada en la Ley de Cultura Cívica de la
            Ciudad de México
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Última actualización: Abril 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
