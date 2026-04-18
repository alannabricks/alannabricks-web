import type { Locale } from './site.config';

export type ServiceId =
  | 'data-platform'
  | 'data-engineering'
  | 'ml-mlops'
  | 'generative-ai'
  | 'cloud-devops';

export type Service = {
  id: ServiceId;
  title: string;
  lead: string;
  forWhom: string;
  bullets: string[];
};

export type TechGroup = {
  title: string;
  items: string[];
};

export type Dict = {
  nav: {
    services: string;
    technologies: string;
    cases: string;
    about: string;
    contact: string;
    cta: string;
  };
  header: {
    skipToContent: string;
    switchLanguage: string;
  };
  home: {
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    cloudsStrap: {
      title: string;
      body: string;
    };
    servicesStrap: {
      title: string;
      body: string;
    };
    featuredCase: {
      eyebrow: string;
      title: string;
      body: string;
      metrics: { label: string; value: string }[];
      cta: string;
    };
    whyUs: {
      title: string;
      items: { title: string; body: string }[];
    };
    techTeaser: {
      title: string;
      body: string;
      cta: string;
    };
    finalCta: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };
  services: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    list: Service[];
    labels: {
      forWhom: string;
      weDeliver: string;
    };
    cta: {
      title: string;
      body: string;
      button: string;
    };
  };
  technologies: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    groups: TechGroup[];
  };
  cases: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    flagship: {
      badge: string;
      industry: string;
      title: string;
      problemLabel: string;
      problem: string;
      solutionLabel: string;
      solution: string;
      impactLabel: string;
      impact: { label: string; value: string }[];
    };
    note: string;
  };
  about: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    mission: {
      title: string;
      body: string;
    };
    team: {
      title: string;
      body: string;
      roles: { title: string; body: string }[];
      note: string;
    };
    values: {
      title: string;
      items: { title: string; body: string }[];
    };
  };
  contact: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    form: {
      name: string;
      company: string;
      email: string;
      projectType: string;
      projectTypeOptions: string[];
      timeline: string;
      message: string;
      submit: string;
      note: string;
    };
    directEmail: {
      title: string;
      body: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    rights: string;
  };
};

const es: Dict = {
  nav: {
    services: 'Servicios',
    technologies: 'Tecnologías',
    cases: 'Casos',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Conversemos',
  },
  header: {
    skipToContent: 'Saltar al contenido',
    switchLanguage: 'English',
  },
  home: {
    hero: {
      eyebrow: 'Data & AI consulting sobre Databricks',
      titleLine1: 'Resolvemos los problemas',
      titleLine2: 'más críticos de datos, ML e IA.',
      subtitle:
        'Equipo senior, multi-cloud (AWS, Azure, GCP). De Delta Lake y MLflow a RAG, agentes con LangGraph y fine-tuning con Mosaic AI, Bedrock y Vertex AI.',
      ctaPrimary: 'Conversemos tu proyecto',
      ctaSecondary: 'Ver servicios',
    },
    cloudsStrap: {
      title: 'Multi-cloud. Multi-LLM. Un solo equipo.',
      body:
        'Trabajamos en AWS, Azure y Google Cloud sobre la plataforma de Databricks, con acceso a todos los modelos de frontera: Claude, GPT, Gemini, Llama, Mistral y DBRX.',
    },
    servicesStrap: {
      title: 'Cinco frentes, un mismo equipo',
      body:
        'Desde la plataforma de datos hasta el agente en producción: cubrimos el ciclo completo sin saltar de proveedor.',
    },
    featuredCase: {
      eyebrow: 'Caso destacado',
      title: 'Migración a la nube sobre Databricks, con gobernanza desde el día uno',
      body:
        'Empresa global con datos distribuidos. Diseñamos el Lakehouse, Unity Catalog para control de accesos y lineage, y toda la infraestructura como código en las tres clouds.',
      metrics: [
        { label: 'de los datos migrados', value: '100%' },
        { label: 'policies de gobernanza activas', value: 'E2E' },
        { label: 'entornos reproducibles', value: '3' },
      ],
      cta: 'Ver más casos',
    },
    whyUs: {
      title: '¿Por qué AlannaBricks?',
      items: [
        {
          title: 'Equipo senior',
          body:
            'Perfiles con años de producción en datos, ML e IA. Nadie aprende sobre tu proyecto crítico.',
        },
        {
          title: 'Databricks-first',
          body:
            'Especialistas en Delta Lake, Unity Catalog, Mosaic AI, Model Serving y Databricks Workflows.',
        },
        {
          title: 'Multi-cloud real',
          body:
            'Implementaciones productivas en AWS, Azure y GCP — no slides, sistemas corriendo.',
        },
        {
          title: 'Mission-critical',
          body:
            'Nos buscan cuando el problema es difícil: migraciones, gobernanza, IA generativa productiva.',
        },
      ],
    },
    techTeaser: {
      title: 'Stack tecnológico',
      body:
        'Databricks, los tres hyperscalers, todos los proveedores de LLMs, frameworks de agentes y vector DBs modernos.',
      cta: 'Ver todas las tecnologías',
    },
    finalCta: {
      title: 'Tienes datos. Quieres IA. Nosotros conectamos ambos lados.',
      body:
        'Cuéntanos el problema — te respondemos con un plan técnico concreto, no una propuesta genérica.',
      primary: 'Conversemos',
      secondary: 'Escribir por email',
    },
  },
  services: {
    hero: {
      eyebrow: 'Servicios',
      title: 'Cinco frentes, un mismo equipo',
      subtitle:
        'Cubrimos la cadena completa: desde la arquitectura del Lakehouse hasta agentes de IA corriendo en producción, con gobernanza y costos bajo control.',
    },
    list: [
      {
        id: 'data-platform',
        title: 'Data Platform sobre Databricks',
        lead:
          'Tus datos unificados en un Lakehouse gobernado, reemplazando DWs legacy y silos.',
        forWhom:
          'Empresas con datos fragmentados en Redshift, Synapse, Snowflake heredado o lagos sin gobernanza.',
        bullets: [
          'Arquitectura Medallion (Bronze/Silver/Gold) sobre Delta Lake.',
          'Unity Catalog para gobernanza, lineage y control de accesos fino.',
          'Delta Live Tables para pipelines declarativos.',
          'Migración desde Hive, Redshift, Synapse o Snowflake.',
          'Optimización de costos: cluster policies, Photon, auto-scaling, spot.',
        ],
      },
      {
        id: 'data-engineering',
        title: 'Data Engineering',
        lead: 'Ingestas confiables, modelado claro, calidad de datos medida.',
        forWhom:
          'Equipos que necesitan pipelines batch y streaming productivos, no POCs.',
        bullets: [
          'Ingesta batch y streaming: Kafka, Kinesis, Event Hubs, Pub/Sub, Auto Loader.',
          'Orquestación con Databricks Workflows, Airflow, Dagster o Azure Data Factory.',
          'Modelado con dbt o Delta Live Tables.',
          'Data quality con Great Expectations y DLT expectations.',
          'CDC con Debezium, Fivetran o ingesta nativa de Databricks.',
        ],
      },
      {
        id: 'ml-mlops',
        title: 'Machine Learning y MLOps',
        lead: 'Modelos que llegan a producción, se monitorean y se reentrenan.',
        forWhom:
          'Equipos de ciencia de datos que quieren cerrar la brecha entre notebook y producción.',
        bullets: [
          'Entrenamiento con MLflow, AutoML cuando aplique, feature stores.',
          'Despliegue serverless: Model Serving de Databricks, SageMaker, Azure ML, Vertex AI Endpoints.',
          'Monitoreo de drift, observabilidad y reentrenamiento programado.',
          'CI/CD con GitHub Actions y Azure DevOps para promoción dev → stg → prod.',
        ],
      },
      {
        id: 'generative-ai',
        title: 'Generative AI y LLMs',
        lead:
          'RAG productivo, agentes en producción, fine-tuning con foundation models de frontera.',
        forWhom:
          'Empresas que quieren bajar LLMs a casos de uso reales sin quedarse en el POC.',
        bullets: [
          'RAG productivo: chunking, embeddings, vector DBs (Databricks Vector Search, Pinecone, Weaviate, Qdrant, pgvector).',
          'Agentes con LangGraph, CrewAI, Bedrock Agents, Azure AI Agents, Vertex AI Agent Builder.',
          'Fine-tuning y adaptación: LoRA, QLoRA, Mosaic AI Model Training.',
          'LLM gateway multi-proveedor: OpenAI, Anthropic (Claude), Google (Gemini), Meta (Llama), Mistral, DBRX.',
          'Evaluación y observabilidad: Langfuse, LangSmith, TruLens, Ragas, guardrails.',
          'LLMOps: versionado de prompts, A/B testing, cost tracking, PII redaction, rate limiting.',
          'Seguridad de IA: prompt injection, data leakage, compliance (GDPR, HIPAA, ISO 42001).',
        ],
      },
      {
        id: 'cloud-devops',
        title: 'Cloud y DevOps',
        lead: 'Infra como código reproducible, seguridad por defecto, costos bajo control.',
        forWhom:
          'Equipos que necesitan la base sobre la que corren los datos y los modelos.',
        bullets: [
          'IaC con Terraform o CDK en AWS, Azure y GCP.',
          'CI/CD con GitHub Actions, Azure DevOps o GitLab.',
          'Observabilidad con CloudWatch, Azure Monitor, Datadog o Grafana.',
          'FinOps: budgets, anomaly detection y rightsizing.',
          'Seguridad: IAM de mínimo privilegio, secretos en Vault o Secrets Manager, hardening.',
        ],
      },
    ],
    labels: {
      forWhom: 'Para quién',
      weDeliver: 'Qué entregamos',
    },
    cta: {
      title: '¿Cuál de estos frentes es el tuyo?',
      body:
        'Cuéntanos el contexto y te respondemos con un plan concreto, no una propuesta genérica.',
      button: 'Conversemos',
    },
  },
  technologies: {
    hero: {
      eyebrow: 'Tecnologías',
      title: 'El stack que usamos en producción',
      subtitle:
        'No listamos logos para decorar: trabajamos con estas herramientas día a día. Agrupadas por capa de la arquitectura.',
    },
    groups: [
      {
        title: 'Data platform',
        items: ['Databricks', 'Delta Lake', 'Unity Catalog', 'Apache Spark', 'Delta Live Tables'],
      },
      {
        title: 'Cloud',
        items: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      },
      {
        title: 'LLMs y modelos de frontera',
        items: ['OpenAI (GPT)', 'Anthropic (Claude)', 'Google (Gemini)', 'Meta (Llama)', 'Mistral', 'Databricks DBRX'],
      },
      {
        title: 'Infraestructura de LLMs',
        items: ['AWS Bedrock', 'Azure OpenAI', 'Vertex AI', 'Databricks Mosaic AI'],
      },
      {
        title: 'Orquestación y agentes',
        items: ['LangChain', 'LlamaIndex', 'LangGraph', 'CrewAI'],
      },
      {
        title: 'Vector databases',
        items: ['Databricks Vector Search', 'Pinecone', 'Weaviate', 'Qdrant', 'pgvector'],
      },
      {
        title: 'MLOps y LLMOps',
        items: ['MLflow', 'Langfuse', 'LangSmith', 'Weights & Biases', 'Ragas', 'TruLens'],
      },
      {
        title: 'DevOps y FinOps',
        items: ['Terraform', 'GitHub Actions', 'Docker', 'Kubernetes', 'Datadog', 'Grafana'],
      },
    ],
  },
  cases: {
    hero: {
      eyebrow: 'Casos',
      title: 'Proyectos que hemos entregado',
      subtitle:
        'Trabajamos con empresas globales en problemas críticos. Los casos aquí son anónimos por acuerdos de confidencialidad.',
    },
    flagship: {
      badge: 'Caso flagship',
      industry: 'Cliente global — sector confidencial',
      title: 'Migración a la nube sobre Databricks, con gobernanza desde el día uno',
      problemLabel: 'El problema',
      problem:
        'Empresa con datos distribuidos en múltiples sistemas y equipos en varias regiones. Necesitaban migrar al Lakehouse con trazabilidad completa y control de accesos desde el primer día — nada de "lo arreglamos después".',
      solutionLabel: 'La solución',
      solution:
        'Arquitectura Lakehouse sobre Databricks con Unity Catalog para gobernanza, lineage y control de accesos. Infraestructura como código en Terraform desplegable en las tres clouds, pipelines declarativos con Delta Live Tables, entornos dev/stg/prod reproducibles end-to-end.',
      impactLabel: 'El impacto',
      impact: [
        { label: 'de los datos migrados con éxito', value: '100%' },
        { label: 'policies de gobernanza (lineage, acceso, auditoría)', value: 'E2E' },
        { label: 'entornos reproducibles sin clicks en consola', value: '3' },
      ],
    },
    note:
      'Más casos en preparación — trabajamos con equipos globales y publicamos a medida que obtenemos las autorizaciones de confidencialidad.',
  },
  about: {
    hero: {
      eyebrow: 'Nosotros',
      title: 'Consultoría en datos, ML e IA para problemas críticos',
      subtitle:
        'AlannaBricks es un equipo senior enfocado en resolver los problemas más difíciles de datos e IA que enfrentan sus clientes, mayoritariamente internacionales y con equipos globales.',
    },
    mission: {
      title: 'Qué hacemos',
      body:
        'Diseñamos plataformas de datos, ponemos modelos de ML en producción y construimos soluciones de IA generativa sobre Databricks y los tres hyperscalers. No hacemos PowerPoint: entregamos sistemas que corren y se mantienen.',
    },
    team: {
      title: 'El equipo',
      body:
        'Trabajamos con un equipo compacto de perfiles senior. Cada proyecto lo lidera gente con años de experiencia en producción — no juniors aprendiendo sobre el problema del cliente.',
      roles: [
        {
          title: 'Data & AI Architects',
          body:
            'Diseño de Lakehouse, Unity Catalog, estrategias multi-cloud y arquitecturas de GenAI productivas.',
        },
        {
          title: 'Senior Data Engineers',
          body:
            'Pipelines batch y streaming en producción, modelado con dbt/DLT, CDC, data quality end-to-end.',
        },
        {
          title: 'ML & LLM Engineers',
          body:
            'MLflow, Model Serving, RAG productivo, fine-tuning, agentes, evaluación y observabilidad.',
        },
        {
          title: 'Cloud & DevOps Engineers',
          body:
            'Terraform multi-cloud, CI/CD con OIDC, seguridad IAM, FinOps y observabilidad.',
        },
      ],
      note:
        'Componemos el equipo a la medida del proyecto. Sin nombres públicos por política con nuestros clientes internacionales.',
    },
    values: {
      title: 'Cómo trabajamos',
      items: [
        {
          title: 'Sobre problemas reales',
          body:
            'Nos involucramos cuando hay un problema crítico, no para dibujar arquitecturas en teoría.',
        },
        {
          title: 'Infraestructura como código',
          body:
            'Todo lo que tocamos queda en Terraform o CDK. Cero "lo configuré a mano en la consola".',
        },
        {
          title: 'Gobernanza desde el día uno',
          body:
            'Unity Catalog, IAM de mínimo privilegio y lineage antes que "lo arreglamos después".',
        },
        {
          title: 'Costo como métrica',
          body:
            'El FinOps no es un extra: lo medimos desde el inicio con budgets y anomaly detection.',
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos el problema',
      subtitle:
        'Respondemos con un plan técnico concreto, no con un brochure de ventas. Si tienes un problema crítico de datos o IA, empieza por aquí.',
    },
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Email corporativo',
      projectType: 'Tipo de proyecto',
      projectTypeOptions: [
        'Data Platform / Lakehouse',
        'Data Engineering',
        'Machine Learning / MLOps',
        'Generative AI / LLMs',
        'Cloud / DevOps',
        'Otro',
      ],
      timeline: 'Timeline aproximado',
      message: 'Cuéntanos el contexto y el problema',
      submit: 'Enviar',
      note:
        'Respondemos en menos de 48 horas hábiles. Sin spam, sin newsletters.',
    },
    directEmail: {
      title: 'O escríbenos directo',
      body: 'Si prefieres el correo, este es el canal rápido:',
    },
  },
  footer: {
    tagline: 'Data & AI consulting sobre Databricks.',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    legalTitle: 'Legal',
    rights: 'Todos los derechos reservados.',
  },
};

const en: Dict = {
  nav: {
    services: 'Services',
    technologies: 'Technologies',
    cases: 'Cases',
    about: 'About',
    contact: 'Contact',
    cta: "Let's talk",
  },
  header: {
    skipToContent: 'Skip to content',
    switchLanguage: 'Español',
  },
  home: {
    hero: {
      eyebrow: 'Data & AI consulting on Databricks',
      titleLine1: 'We solve the most critical',
      titleLine2: 'data, ML and AI problems.',
      subtitle:
        'Senior team, multi-cloud (AWS, Azure, GCP). From Delta Lake and MLflow to RAG, LangGraph agents and fine-tuning with Mosaic AI, Bedrock and Vertex AI.',
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: 'See services',
    },
    cloudsStrap: {
      title: 'Multi-cloud. Multi-LLM. One team.',
      body:
        'We work on AWS, Azure and Google Cloud on top of the Databricks platform, with access to every frontier model: Claude, GPT, Gemini, Llama, Mistral and DBRX.',
    },
    servicesStrap: {
      title: 'Five fronts, one team',
      body:
        'From the data platform to the agent in production: we cover the full lifecycle without jumping providers.',
    },
    featuredCase: {
      eyebrow: 'Featured case',
      title: 'Cloud migration on Databricks, with governance from day one',
      body:
        'Global company with distributed data. We designed the Lakehouse, Unity Catalog for access control and lineage, and all the infrastructure as code across the three clouds.',
      metrics: [
        { label: 'of data migrated', value: '100%' },
        { label: 'governance policies active', value: 'E2E' },
        { label: 'reproducible environments', value: '3' },
      ],
      cta: 'See more cases',
    },
    whyUs: {
      title: 'Why AlannaBricks?',
      items: [
        {
          title: 'Senior team',
          body:
            'Profiles with years in production on data, ML and AI. Nobody is learning on your critical project.',
        },
        {
          title: 'Databricks-first',
          body:
            'Specialists in Delta Lake, Unity Catalog, Mosaic AI, Model Serving and Databricks Workflows.',
        },
        {
          title: 'Real multi-cloud',
          body:
            'Production deployments on AWS, Azure and GCP — not slides, systems running.',
        },
        {
          title: 'Mission-critical',
          body:
            'Clients bring us in when the problem is hard: migrations, governance, productive generative AI.',
        },
      ],
    },
    techTeaser: {
      title: 'Tech stack',
      body:
        'Databricks, the three hyperscalers, every LLM provider, agent frameworks and modern vector DBs.',
      cta: 'See all technologies',
    },
    finalCta: {
      title: 'You have data. You want AI. We connect both sides.',
      body:
        "Tell us the problem — we reply with a concrete technical plan, not a generic proposal.",
      primary: "Let's talk",
      secondary: 'Email us',
    },
  },
  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Five fronts, one team',
      subtitle:
        'We cover the full chain: from Lakehouse architecture to AI agents running in production, with governance and cost under control.',
    },
    list: [
      {
        id: 'data-platform',
        title: 'Data Platform on Databricks',
        lead:
          'Your data unified in a governed Lakehouse, replacing legacy DWs and silos.',
        forWhom:
          'Companies with data fragmented across Redshift, Synapse, legacy Snowflake or ungoverned lakes.',
        bullets: [
          'Medallion architecture (Bronze/Silver/Gold) on Delta Lake.',
          'Unity Catalog for governance, lineage and fine-grained access control.',
          'Delta Live Tables for declarative pipelines.',
          'Migration from Hive, Redshift, Synapse or Snowflake.',
          'Cost optimization: cluster policies, Photon, auto-scaling, spot.',
        ],
      },
      {
        id: 'data-engineering',
        title: 'Data Engineering',
        lead: 'Reliable ingestion, clear modeling, measured data quality.',
        forWhom: 'Teams that need production batch and streaming pipelines, not POCs.',
        bullets: [
          'Batch and streaming ingestion: Kafka, Kinesis, Event Hubs, Pub/Sub, Auto Loader.',
          'Orchestration with Databricks Workflows, Airflow, Dagster or Azure Data Factory.',
          'Modeling with dbt or Delta Live Tables.',
          'Data quality with Great Expectations and DLT expectations.',
          'CDC with Debezium, Fivetran or native Databricks ingestion.',
        ],
      },
      {
        id: 'ml-mlops',
        title: 'Machine Learning and MLOps',
        lead: 'Models that make it to production, get monitored and retrained.',
        forWhom:
          'Data science teams that want to close the gap between notebook and production.',
        bullets: [
          'Training with MLflow, AutoML when applicable, feature stores.',
          'Serverless deployment: Databricks Model Serving, SageMaker, Azure ML, Vertex AI Endpoints.',
          'Drift monitoring, observability and scheduled retraining.',
          'CI/CD with GitHub Actions and Azure DevOps for dev → stg → prod promotion.',
        ],
      },
      {
        id: 'generative-ai',
        title: 'Generative AI and LLMs',
        lead:
          'Production RAG, agents live in production, fine-tuning with frontier foundation models.',
        forWhom:
          'Companies that want to take LLMs from POC into real use cases.',
        bullets: [
          'Production RAG: chunking, embeddings, vector DBs (Databricks Vector Search, Pinecone, Weaviate, Qdrant, pgvector).',
          'Agents with LangGraph, CrewAI, Bedrock Agents, Azure AI Agents, Vertex AI Agent Builder.',
          'Fine-tuning and adaptation: LoRA, QLoRA, Mosaic AI Model Training.',
          'Multi-provider LLM gateway: OpenAI, Anthropic (Claude), Google (Gemini), Meta (Llama), Mistral, DBRX.',
          'Evaluation and observability: Langfuse, LangSmith, TruLens, Ragas, guardrails.',
          'LLMOps: prompt versioning, A/B testing, cost tracking, PII redaction, rate limiting.',
          'AI security: prompt injection, data leakage, compliance (GDPR, HIPAA, ISO 42001).',
        ],
      },
      {
        id: 'cloud-devops',
        title: 'Cloud and DevOps',
        lead: 'Reproducible infra as code, security by default, cost under control.',
        forWhom:
          'Teams that need the foundation on which data and models actually run.',
        bullets: [
          'IaC with Terraform or CDK on AWS, Azure and GCP.',
          'CI/CD with GitHub Actions, Azure DevOps or GitLab.',
          'Observability with CloudWatch, Azure Monitor, Datadog or Grafana.',
          'FinOps: budgets, anomaly detection and rightsizing.',
          'Security: least-privilege IAM, secrets in Vault or Secrets Manager, hardening.',
        ],
      },
    ],
    labels: {
      forWhom: 'For whom',
      weDeliver: 'What we deliver',
    },
    cta: {
      title: 'Which of these fronts is yours?',
      body:
        'Tell us the context and we reply with a concrete plan, not a generic proposal.',
      button: "Let's talk",
    },
  },
  technologies: {
    hero: {
      eyebrow: 'Technologies',
      title: 'The stack we use in production',
      subtitle:
        "We don't list logos to decorate: we work with these tools every day. Grouped by architecture layer.",
    },
    groups: [
      {
        title: 'Data platform',
        items: ['Databricks', 'Delta Lake', 'Unity Catalog', 'Apache Spark', 'Delta Live Tables'],
      },
      {
        title: 'Cloud',
        items: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      },
      {
        title: 'Frontier LLMs and models',
        items: ['OpenAI (GPT)', 'Anthropic (Claude)', 'Google (Gemini)', 'Meta (Llama)', 'Mistral', 'Databricks DBRX'],
      },
      {
        title: 'LLM infrastructure',
        items: ['AWS Bedrock', 'Azure OpenAI', 'Vertex AI', 'Databricks Mosaic AI'],
      },
      {
        title: 'Orchestration and agents',
        items: ['LangChain', 'LlamaIndex', 'LangGraph', 'CrewAI'],
      },
      {
        title: 'Vector databases',
        items: ['Databricks Vector Search', 'Pinecone', 'Weaviate', 'Qdrant', 'pgvector'],
      },
      {
        title: 'MLOps and LLMOps',
        items: ['MLflow', 'Langfuse', 'LangSmith', 'Weights & Biases', 'Ragas', 'TruLens'],
      },
      {
        title: 'DevOps and FinOps',
        items: ['Terraform', 'GitHub Actions', 'Docker', 'Kubernetes', 'Datadog', 'Grafana'],
      },
    ],
  },
  cases: {
    hero: {
      eyebrow: 'Cases',
      title: 'Projects we have delivered',
      subtitle:
        'We work with global companies on critical problems. Cases here are anonymized due to confidentiality agreements.',
    },
    flagship: {
      badge: 'Flagship case',
      industry: 'Global client — confidential sector',
      title: 'Cloud migration on Databricks, with governance from day one',
      problemLabel: 'The problem',
      problem:
        'Company with data distributed across multiple systems and teams in several regions. They needed to migrate to the Lakehouse with full traceability and access control from day one — no "we\'ll fix it later".',
      solutionLabel: 'The solution',
      solution:
        'Lakehouse architecture on Databricks with Unity Catalog for governance, lineage and access control. Infrastructure as code in Terraform deployable across the three clouds, declarative pipelines with Delta Live Tables, end-to-end reproducible dev/stg/prod environments.',
      impactLabel: 'The impact',
      impact: [
        { label: 'of data successfully migrated', value: '100%' },
        { label: 'governance policies (lineage, access, audit)', value: 'E2E' },
        { label: 'reproducible environments with zero clicks in console', value: '3' },
      ],
    },
    note:
      'More cases in preparation — we work with global teams and publish as we get the confidentiality clearances.',
  },
  about: {
    hero: {
      eyebrow: 'About',
      title: 'Data, ML and AI consulting for critical problems',
      subtitle:
        'AlannaBricks is a senior team focused on solving the hardest data and AI problems for its clients — mostly international, with global teams.',
    },
    mission: {
      title: 'What we do',
      body:
        'We design data platforms, put ML models in production and build generative AI solutions on Databricks and the three hyperscalers. We do not do PowerPoint: we deliver systems that run and are maintained.',
    },
    team: {
      title: 'The team',
      body:
        'We work with a compact team of senior profiles. Every project is led by people with years of production experience — no juniors learning on the client\'s problem.',
      roles: [
        {
          title: 'Data & AI Architects',
          body:
            'Lakehouse design, Unity Catalog, multi-cloud strategies and productive GenAI architectures.',
        },
        {
          title: 'Senior Data Engineers',
          body:
            'Production batch and streaming pipelines, modeling with dbt/DLT, CDC, end-to-end data quality.',
        },
        {
          title: 'ML & LLM Engineers',
          body:
            'MLflow, Model Serving, production RAG, fine-tuning, agents, evaluation and observability.',
        },
        {
          title: 'Cloud & DevOps Engineers',
          body:
            'Multi-cloud Terraform, CI/CD with OIDC, IAM security, FinOps and observability.',
        },
      ],
      note:
        'We shape the team around the project. No public names, as per our policy with international clients.',
    },
    values: {
      title: 'How we work',
      items: [
        {
          title: 'On real problems',
          body:
            "We get involved when there's a critical problem, not to draw theoretical architectures.",
        },
        {
          title: 'Infrastructure as code',
          body:
            'Everything we touch ends up in Terraform or CDK. Zero "I configured it by hand in the console".',
        },
        {
          title: 'Governance from day one',
          body:
            'Unity Catalog, least-privilege IAM and lineage before "we\'ll fix it later".',
        },
        {
          title: 'Cost as a metric',
          body:
            "FinOps isn't an extra: we measure it from the start with budgets and anomaly detection.",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Tell us the problem',
      subtitle:
        'We reply with a concrete technical plan, not a sales brochure. If you have a critical data or AI problem, start here.',
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Corporate email',
      projectType: 'Project type',
      projectTypeOptions: [
        'Data Platform / Lakehouse',
        'Data Engineering',
        'Machine Learning / MLOps',
        'Generative AI / LLMs',
        'Cloud / DevOps',
        'Other',
      ],
      timeline: 'Approximate timeline',
      message: 'Tell us the context and the problem',
      submit: 'Send',
      note: 'We respond within 48 business hours. No spam, no newsletters.',
    },
    directEmail: {
      title: 'Or email us directly',
      body: 'If you prefer email, this is the fast channel:',
    },
  },
  footer: {
    tagline: 'Data & AI consulting on Databricks.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    rights: 'All rights reserved.',
  },
};

export const dictionaries: Record<Locale, Dict> = { es, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
