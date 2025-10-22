// Component loader utility
export async function loadComponent(componentName, targetElement) {
  try {
    const response = await fetch(`./src/components/${componentName}.html`);
    if (!response.ok) {
      throw new Error(`Failed to load ${componentName}`);
    }
    const html = await response.text();
    targetElement.innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error);
  }
}

export async function loadAllComponents() {
  const components = [
    { name: "header", target: document.getElementById("header-container") },
    { name: "hero", target: document.getElementById("hero-container") },
    {
      name: "problems",
      target: document.getElementById("problems-container"),
    },
    {
      name: "solutions",
      target: document.getElementById("solutions-container"),
    },
    { name: "benefits", target: document.getElementById("benefits-container") },
    { name: "cta", target: document.getElementById("cta-container") },
    { name: "footer", target: document.getElementById("footer-container") },
  ];

  const loadPromises = components.map((component) => {
    if (component.target) {
      return loadComponent(component.name, component.target);
    }
    return Promise.resolve();
  });

  await Promise.all(loadPromises);
}
