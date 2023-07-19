apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-express-app-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-express-app
  updatePolicy:
    updateMode: Auto
  resourcePolicy:
    containerPolicies:
    - containerName: my-express-app
      minAllowed:
        cpu: 50m
        memory: 256Mi
      maxAllowed:
        cpu: 200m
        memory: 512Mi
