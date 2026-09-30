// import React from 'react';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Paper,
//   CardMedia,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SecurityIcon from '@mui/icons-material/Security';
// import SpeedIcon from '@mui/icons-material/Speed';
// import StorageIcon from '@mui/icons-material/Storage';
// import PublicIcon from '@mui/icons-material/Public';
// import RecyclingIcon from '@mui/icons-material/Recycling';
// import GavelIcon from '@mui/icons-material/Gavel';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import BusinessIcon from '@mui/icons-material/Business';
// import DescriptionIcon from '@mui/icons-material/Description';

// import SolutionsCTA from '../../../components/SolutionsCTA';
// import SolutionsServices from '../../../components/SolutionsServices';

// const PlasticTax = () => {
//   const features = [
//     {
//       title: 'Extensive Database',
//       description: 'Obtain access to updated data on plastic tax regimes across countries with ONAS Global.',
//       icon: <StorageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
//     },
//     {
//       title: 'Efficient Reporting',
//       description: 'Automated tools from ONAS Global will help you provide accurate and timely reporting.',
//       icon: <SpeedIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop',
//     },
//     {
//       title: 'Expert Consultation',
//       description: 'Collaborate with ONAS Global specialists for customized guidance on plastic tax compliance.',
//       icon: <BusinessIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop',
//     },
//   ];

//   const financingMethods = [
//     {
//       title: 'National Budgets',
//       description: 'Direct payment from the state\'s reserves to fund the EU Plastic Levy.',
//       icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_9zllRDv42gKh71ozgL7uWT6_e-ooHxjmhDw2Fk6rQ&s=10',
//     },
//     {
//       title: 'New Plastic Taxes',
//       description: 'Introducing new taxes, charges, or contributions on plastic commodities.',
//       icon: <GavelIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRTjUyWhbEPziyuFL_P7kR7YcL2o77_k7nId6DPiq1Q&s=10',
//     },
//     {
//       title: 'Extending Current Schemes',
//       description: 'Broadening the scope of current taxation systems to cover a broader range of plastic products.',
//       icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AaXKNdfvn174FGBtg_QyU3zY9kMxHZ3ouCgf_acNew&s=10',
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>

//       {/* =========================================================
//           HERO SECTION - FIXED: No overlay, smaller image, smaller fonts
//       ========================================================= */}
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOhuKK3WIJJTli4-9tw5m5KPWHD-go37TnkYS7ZpHCQ&s=10)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           mt: { xs: 8, sm: 9, md: 10 },
//           py: { xs: 4, sm: 5, md: 6 },
//         }}
//       >
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//           <Grid container alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Typography
//                 variant="h2"
//                 component="h1"
//                 fontWeight={700}
//                 sx={{
//                   fontSize: { xs: '24px', sm: '30px', md: '38px', lg: '44px' },
//                   mb: 1,
//                   lineHeight: 1.2,
//                   color: '#0B4C74',
//                 }}
//               >
//                 Plastic Tax Reports
//               </Typography>
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 fontWeight={500}
//                 sx={{
//                   color: '#2E8BC0',
//                   mb: 1.5,
//                   fontSize: { xs: '16px', sm: '18px', md: '20px' },
//                 }}
//               >
//                 Addressing Global Plastic Waste
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { xs: '13px', sm: '14px', md: '15px' },
//                   lineHeight: 1.6,
//                   color: '#333',
//                   maxWidth: '650px',
//                 }}
//               >
//                 The importance of addressing plastic pollution has expanded to a global, regional, and national extent.
//                 ONAS Global Services provides comprehensive plastic tax reporting solutions to help businesses navigate
//                 this evolving regulatory landscape.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* =========================================================
//           EUROPE'S ANSWER TO PLASTIC WASTE - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #e8ecf1',
//             bgcolor: 'white',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Europe's Answer to Plastic Waste
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//               mb: 1.5,
//             }}
//           >
//             Europe, with its intense awareness of plastic waste challenges, has been proactive in its policy response.
//             ONAS Global helps businesses navigate the European Union's unique "plastic levy" effective from 1 January 2021.
//             Based on non-recycled plastic packaging waste, this duty is to reduce its excessive spread, while at the same
//             time supporting the 2021-2027 EU budget.
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             Each EU member state's levy is calculated by applying a rate of EUR 0.80 per kilogram to the weight of
//             non-recycled plastic packaging waste. ONAS Global provides solutions to help businesses financialize these
//             payments, whether through national budgets, new taxes, or extending existing ones on plastic products.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           PLASTIC TAXATION IN THE EU (3 CARDS) - FIXED: Smaller cards
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Typography
//           variant="h4"
//           fontWeight={600}
//           sx={{
//             color: '#0B4C74',
//             mb: 1.5,
//             textAlign: 'center',
//             fontSize: { xs: '18px', sm: '20px', md: '24px' },
//           }}
//         >
//           Plastic Taxation in the EU: Navigating Diverse Financing Methods
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: { xs: '12px', sm: '13px', md: '14px' },
//             lineHeight: 1.7,
//             color: '#555',
//             mb: 3,
//             textAlign: 'center',
//             maxWidth: '800px',
//             mx: 'auto',
//             px: { xs: 2, sm: 0 },
//           }}
//         >
//           EU Member States have diverse strategies for financing the EU Plastic Levy. ONAS Global helps businesses
//           understand and navigate these approaches:
//         </Typography>

//         <Grid container spacing={1.5} justifyContent="center">
//           {financingMethods.map((method, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={index}
//               sx={{ display: 'flex', justifyContent: 'center' }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.03 }}
//                 style={{ width: '100%', maxWidth: '300px', height: '100%' }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     minHeight: { xs: 240, sm: 260, md: 280 },
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     '&:hover': {
//                       boxShadow: '0 12px 40px rgba(46, 139, 192, 0.15)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={method.image}
//                     alt={method.title}
//                     sx={{
//                       height: { xs: 120, sm: 130 },
//                       objectFit: 'cover',
//                       flexShrink: 0,
//                     }}
//                   />
//                   <CardContent
//                     sx={{
//                       textAlign: 'center',
//                       p: { xs: 1.5, sm: 2 },
//                       flexGrow: 1,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: { xs: 50, sm: 60 },
//                         height: { xs: 50, sm: 60 },
//                         borderRadius: '50%',
//                         bgcolor: '#e6f0ff',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mx: 'auto',
//                         mb: 1.5,
//                         mt: { xs: -3, sm: -4 },
//                         border: '3px solid white',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                         flexShrink: 0,
//                       }}
//                     >
//                       {method.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       fontWeight={600}
//                       sx={{
//                         color: '#0B4C74',
//                         mb: 0.5,
//                         fontSize: { xs: '13px', sm: '14px', md: '15px' },
//                       }}
//                     >
//                       {method.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: '#666',
//                         lineHeight: 1.5,
//                         fontSize: { xs: '11px', sm: '12px', md: '12px' },
//                       }}
//                     >
//                       {method.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* =========================================================
//           ONAS GLOBAL FEATURES (3 CARDS) - FIXED: Smaller cards
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Typography
//           variant="h4"
//           fontWeight={600}
//           sx={{
//             color: '#0B4C74',
//             mb: 1.5,
//             textAlign: 'center',
//             fontSize: { xs: '18px', sm: '20px', md: '24px' },
//           }}
//         >
//           ONAS Global: Navigating Plastic Tax Reporting with Precision
//         </Typography>

//         <Grid container spacing={1.5} justifyContent="center">
//           {features.map((feature, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={index}
//               sx={{ display: 'flex', justifyContent: 'center' }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.03 }}
//                 style={{ width: '100%', maxWidth: '300px', height: '100%' }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     minHeight: { xs: 240, sm: 260, md: 280 },
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     '&:hover': {
//                       boxShadow: '0 12px 40px rgba(46, 139, 192, 0.15)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={feature.image}
//                     alt={feature.title}
//                     sx={{
//                       height: { xs: 120, sm: 130 },
//                       objectFit: 'cover',
//                       flexShrink: 0,
//                     }}
//                   />
//                   <CardContent
//                     sx={{
//                       textAlign: 'center',
//                       p: { xs: 1.5, sm: 2 },
//                       flexGrow: 1,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: { xs: 50, sm: 60 },
//                         height: { xs: 50, sm: 60 },
//                         borderRadius: '50%',
//                         bgcolor: '#e6f0ff',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mx: 'auto',
//                         mb: 1.5,
//                         mt: { xs: -3, sm: -4 },
//                         border: '3px solid white',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                         flexShrink: 0,
//                       }}
//                     >
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       fontWeight={600}
//                       sx={{
//                         color: '#0B4C74',
//                         mb: 0.5,
//                         fontSize: { xs: '13px', sm: '14px', md: '15px' },
//                       }}
//                     >
//                       {feature.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: '#666',
//                         lineHeight: 1.5,
//                         fontSize: { xs: '11px', sm: '12px', md: '12px' },
//                       }}
//                     >
//                       {feature.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* =========================================================
//           WHAT IS PLASTIC TAX - KEPT SAME STRUCTURE, ONLY SMALLER FONTS
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: {
//               xs: '1fr',
//               md: '1fr 1fr',
//             },
//             gap: {
//               xs: 3,
//               sm: 4,
//               md: 5,
//             },
//             alignItems: 'center',
//           }}
//         >
//           {/* LEFT - CONTENT */}
//           <Box sx={{ width: '100%', minWidth: 0 }}>
//             <Typography
//               variant="h4"
//               fontWeight={600}
//               sx={{
//                 color: '#0B4C74',
//                 mb: 1.5,
//                 fontSize: { xs: '18px', sm: '20px', md: '24px' },
//               }}
//             >
//               What is Plastic Tax?
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: { xs: '12px', sm: '13px', md: '14px' },
//                 lineHeight: 1.7,
//                 color: '#555',
//               }}
//             >
//               The Plastic Tax is an innovative environmental levy aimed at reducing plastic waste. ONAS Global helps
//               businesses navigate this tax that targets the production and import of plastic packaging, especially those
//               materials lacking significant recycled content. By setting a minimum threshold of 30% recycled material for
//               plastic packaging, the tax encourages businesses to rethink their packaging strategies, promoting a shift
//               towards more sustainable and eco-friendly options.
//             </Typography>
//           </Box>

//           {/* RIGHT - IMAGE */}
//           <Box sx={{ width: '100%', minWidth: 0 }}>
//             <Box
//               component="img"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStb7PhkFSE3wRE6NoRHJ1NbjpMmNqOld1YqLhNtMn-1A&s=10"
//               alt="Plastic Tax"
//               sx={{
//                 display: 'block',
//                 width: '100%',
//                 height: { xs: 180, sm: 200, md: 240 },
//                 borderRadius: 3,
//                 objectFit: 'cover',
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//               }}
//             />
//           </Box>
//         </Box>
//       </Container>

//       {/* =========================================================
//           HOW DOES PLASTIC TAX WORK - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #d6e8f7',
//             bgcolor: '#f0f7ff',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             How Does Plastic Tax Work?
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             The mechanics of the Plastic Tax are straightforward yet impactful. ONAS Global helps manufacturers and
//             importers of plastic packaging navigate the tax requirements if their products contain less than 30% recycled
//             content. This threshold serves as a benchmark, encouraging companies to either increase the recycled content
//             in their packaging or face the financial implications of the tax. It's designed to be a compelling motivator
//             for companies to align their practices with environmental standards.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           WHO PAYS THE PLASTIC PACKAGING TAX - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #e8ecf1',
//             bgcolor: 'white',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Who Pays the Plastic Packaging Tax?
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             The Plastic Packaging Tax is levied on businesses engaged in the manufacturing or importing of plastic
//             packaging. ONAS Global helps these businesses assess the composition of their packaging materials and ensure
//             compliance with the tax regulations. Failure to adhere to these requirements can lead to financial penalties,
//             making it imperative for businesses to adopt and contribute to the environmental cause.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           PLASTIC PACKAGING TAX REPORTING REQUIREMENTS - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #d6e8f7',
//             bgcolor: '#f0f7ff',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Plastic Packaging Tax Reporting Requirements
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             For compliance with the Plastic Packaging Tax, affected businesses must maintain detailed records and provide
//             regular reports on their plastic packaging. ONAS Global helps businesses include information on the total
//             weight of the plastic packaging produced or imported, the proportion of recycled content, and any efforts made
//             to increase this proportion. Accurate reporting not only ensures compliance but also reflects a company's
//             commitment to environmental stewardship and responsible business practices.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           WHY IS PLASTIC TAX BEING IMPLEMENTED - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #e8ecf1',
//             bgcolor: 'white',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Why is the Plastic Tax being implemented in the U.K.?
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             In the United Kingdom, the Plastic Tax is being rolled out as a strategic response to the escalating
//             environmental concerns related to plastic waste. ONAS Global helps businesses navigate this tax that forms
//             part of a broader initiative to protect the environment by discouraging the use of single-use plastics and
//             promoting recycling. The government aims to incentivize businesses to incorporate more recycled materials,
//             thus reducing the carbon footprint and environmental impact associated with plastic production and disposal.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           WHO IS SUBJECT TO PAY - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #d6e8f7',
//             bgcolor: '#f0f7ff',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Who is subject to pay according to the new plastic tax?
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             Under the new plastic tax regulations, the primary responsibility falls on manufacturers and importers of
//             plastic packaging in the U.K. ONAS Global helps a wide range of businesses, from large corporations to
//             medium-sized enterprises, navigate the tax requirements for their operations. The tax aims to make these
//             businesses key players in the transition towards more sustainable packaging solutions.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           WHO WILL BE OBLIGATED - FIXED: Smaller fonts
//       ========================================================= */}
//       <Container maxWidth="lg" sx={{ mb: 4 }}>
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 2, sm: 3, md: 3.5 },
//             borderRadius: 3,
//             border: '1px solid #e8ecf1',
//             bgcolor: 'white',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             sx={{
//               color: '#0B4C74',
//               mb: 1.5,
//               fontSize: { xs: '18px', sm: '20px', md: '24px' },
//             }}
//           >
//             Who will be obligated for the Plastic Packaging Tax?
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '12px', sm: '13px', md: '14px' },
//               lineHeight: 1.7,
//               color: '#555',
//             }}
//           >
//             The obligation to pay the Plastic Packaging Tax is specifically aimed at businesses dealing with significant
//             volumes of plastic packaging – those producing or importing more than 10 tonnes of plastic packaging annually.
//             ONAS Global helps businesses understand this threshold that ensures the tax doesn't place an undue burden on
//             small businesses while holding larger, more impactful companies accountable for their environmental
//             responsibilities.
//           </Typography>
//         </Paper>
//       </Container>

//       {/* =========================================================
//           CTA SECTION
//       ========================================================= */}
//       <SolutionsCTA />

//       {/* =========================================================
//           SERVICES SECTION - FIXED: No services array, just the component
//       ========================================================= */}
//       <SolutionsServices />

//     </Box>
//   );
// };

// export default PlasticTax;